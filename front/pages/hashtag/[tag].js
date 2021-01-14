import React, { useEffect } from "react";
import { scrollHandler } from "../../util/scrollHandler";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import { END } from "redux-saga";
import { loadHashtagAction } from "../../actions/post";
import { loadMyInfoAction } from "../../actions/user";
import axios from "axios";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/AppLayout";
import PostsList from "../../components/Post/PostsList";

const HashTagPost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { hashTagPosts, hasMorePost, loadPostloading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    const lastId = hashTagPosts[hashTagPosts.length - 1]?.id;

    const predicate = () => {
      return hasMorePost && !loadPostloading;
    };

    const onScroll = scrollHandler(
      dispatch.bind(null, loadHashtagAction({ hashTag: tag, lastId: lastId })),
      predicate
    );

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hashTagPosts, hasMorePost, loadPostloading]);

  if (!hashTagPosts) {
    return (
      <AppLayout pageName={""}>
        <h1>게시글이 없습니다.</h1>
      </AppLayout>
    );
  }
  return (
    <AppLayout pageName={tag} searchKeyword={tag}>
      <Head>
        <title>{tag} 해시태그 검색내용</title>
      </Head>
      <meta name="description" content={tag} />
      <meta property="og:title" content={tag} />
      <meta property="og:url" content={`https://jackjacks.com/hashta/${tag}`} />
      {hashTagPosts.length > 0 ? (
        <PostsList posts={hashTagPosts} loading={loadPostloading} />
      ) : (
        <h1>{tag}검색 내용이 없습니다!</h1>
      )}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    console.log(context);
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoAction());
    context.store.dispatch(loadHashtagAction({ hashTag: context.params.tag }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default HashTagPost;
