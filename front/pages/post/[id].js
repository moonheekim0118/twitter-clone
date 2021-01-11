import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import { loadSinglePostAction, changeTargetAction } from '../../actions/post';
import { loadMyInfoAction } from '../../actions/user';
import axios from 'axios';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/Post/PostCard';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const singlePost = useSelector((state) => state.post.singlePost);

    if (!singlePost) {
        return (
            <AppLayout pageName={''}>
                <h1>존재하지 않는 게시물 입니다.</h1>
            </AppLayout>
        );
    }
    return (
        <AppLayout pageName={'Tweet'}>
            <Head>
                <title>{singlePost.User.nickname}님의 게시글</title>
            </Head>
            <meta name="description" content={singlePost.content} />
            <meta
                property="og:title"
                content={`${singlePost.User.nickname}님의 게시글`}
            />
            <meta property="og:description" content={singlePost.content} />
            <meta
                property="og:image"
                content={`${
                    singlePost.Images[0] ? singlePost.Images[0].src : ''
                }님의 게시글`}
            />
            <meta
                property="og:url"
                content={`https://jackjacks.com/post/${id}`}
            />
            <PostCard post={singlePost} commentFormOpen={true} />
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const cookie = context.req ? context.req.headers.cookie : '';
        console.log(context);
        axios.defaults.headers.Cookie = '';
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch(loadMyInfoAction());
        context.store.dispatch(loadSinglePostAction(context.params.id));
        context.store.dispatch(changeTargetAction('single'));
        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
        return { props: {} };
    }
);

export default Post;
