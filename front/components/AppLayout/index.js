import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlertAction } from '../../actions/ui';
import Router from 'next/router';
import Menu from './Menu';
import Alert from '../Alert';
import Search from '../Search';
import {
    Header,
    Main,
    Side,
    Footer,
    Description,
    DescriptionWithoutLink,
} from './style';
import { PushBackIcon } from '../Icons';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const AppLayout = ({ pageName, searchKeyword, children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const { showAlert } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => dispatch(hideAlertAction()), 5000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const onClickBack = useCallback(() => {
        Router.back();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div id="root" />
            <Alert />
            <Header>
                {pageName === 'Home' ? (
                    <Link href="/">
                        <Description>{pageName}</Description>
                    </Link>
                ) : (
                    <DescriptionWithoutLink>
                        <PushBackIcon onClick={onClickBack} />
                        <span>{pageName}</span>
                    </DescriptionWithoutLink>
                )}
            </Header>
            <div>
                <Menu isLoggedIn={isLoggedIn} />
                <Main>{children}</Main>
                <Side>
                    <Search keyword={searchKeyword} />
                </Side>
            </div>
            <Footer>
                <a
                    href="https://mooneedev.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Mady by moonee
                </a>
            </Footer>
        </ThemeProvider>
    );
};

AppLayout.defaultProps = {
    searchKeyword: '',
};

AppLayout.propTypes = {
    pageName: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    searchKeyword: PropTypes.string.isRequired,
};

export default AppLayout;
