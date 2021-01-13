import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";
import GlobalStyles from "../components/globalStyle";

const App = ({ Component }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta charSet="utf-8" />
        <title>Twitter</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
