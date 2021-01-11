import React, { useEffect } from 'react';
import { scrollHandler } from '../../../util/scrollHandler';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import { loadMyInfoAction } from '../../../actions/user';
import {
    loadUserInfoAction,
    loadFollowersAction,
} from '../../../actions/commonUser';
import axios from 'axios';
import wrapper from '../../../store/configureStore';
import AppLayout from '../../../components/AppLayout';
import Header from '../../../components/Header';
import FollowCard from '../../../components/Follow/FollowCard';
import { MiddleWrapper } from '../../../components/globalStyle';
import { LoadingIcon } from '../../../components/Icons';

const Followers = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const {
        userInfo,
        FollowerList,
        hasMoreFollowers,
        loadFollowerListLoading,
    } = useSelector((state) => state.commonUser);

    useEffect(() => {
        const lastId = FollowerList[FollowerList.length - 1]?.id;
        const onScroll = scrollHandler(
            dispatch.bind(
                null,
                loadFollowersAction({ userId: id, lastId: lastId })
            ),
            hasMoreFollowers,
            loadFollowerListLoading
        );
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [FollowerList, hasMoreFollowers, loadFollowerListLoading]);

    if (!userInfo) {
        return (
            <AppLayout pageName={''}>
                <h1>존재하지 않는 사용자입니다.</h1>
            </AppLayout>
        );
    }

    return (
        <AppLayout pageName={userInfo.nickname}>
            <Head>
                <title>{userInfo.nickname} 님의 팔로워 리스트</title>
            </Head>
            <meta name="description" content={userInfo.nickname} />
            <meta
                property="og:title"
                content={`${userInfo.nickname}님의 짹짹 페이지 팔로잉 목록 `}
            />
            <meta
                property="og:url"
                content={`https://jackjacks.com/user/${id}`}
            />
            <Header userId={id} theme="Follow" where={'Followers'} />
            {FollowerList.length === 0 ? (
                <h1>팔로워가 없습니다.</h1>
            ) : (
                FollowerList.map((user) => (
                    <FollowCard key={user.id} user={user} />
                ))
            )}
            {loadFollowerListLoading ? (
                <MiddleWrapper>
                    <LoadingIcon />
                </MiddleWrapper>
            ) : (
                ''
            )}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const cookie = context.req ? context.req.headers.cookie : '';
        axios.defaults.headers.Cookie = '';
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch(loadMyInfoAction());
        context.store.dispatch(loadUserInfoAction(context.params.id)); // 유저 정보 불러오기
        context.store.dispatch(
            loadFollowersAction({ userId: context.params.id })
        ); // 팔로워 정보
        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
        return { props: {} };
    }
);

export default Followers;
