import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import withReduxSaga from 'next-redux-saga';


const App =({Component})=>{

    return(
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>JackJack</title>
        </Head>
        <Component/>
        </>
    )
};

App.propTypes ={
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(App));