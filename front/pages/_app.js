import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';
import GlobalStyles from '../components/globalStyle'
import { useSelector } from 'react-redux';

const App =({Component})=>{
    const { showPostModal } = useSelector(state=>state.ui);
    return(
        <>
        <GlobalStyles modalOpen={showPostModal}/>
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

export default wrapper.withRedux(App);