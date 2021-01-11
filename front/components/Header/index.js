import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ userId, theme, where }) => {
    const First = {};
    const Second = {};
    const href = '/user/[id]';
    const as = `/user/${userId}`;
    if (theme === 'Tweet') {
        First.name = 'Tweets';
        First.path = '';
        Second.name = 'Likes';
        Second.path = '/likes';
    } else {
        First.name = 'Followings';
        First.path = '/followings';
        Second.name = 'Followers';
        Second.path = '/followers';
    }

    return (
        <Wrapper>
            <Menu clicked={First.name === where}>
                <Link href={href + First.path} as={as + First.path}>
                    <Atag clicked={First.name === where}>{First.name}</Atag>
                </Link>
            </Menu>
            <Menu clicked={Second.name === where}>
                <Link href={href + Second.path} as={as + Second.path}>
                    <Atag clicked={Second.name === where}>{Second.name}</Atag>
                </Link>
            </Menu>
        </Wrapper>
    );
};

Header.propTypes = {
    userId: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    cursor: pointer;
`;

const Menu = styled.div`
    text-align: center;
    width: 50%;
    padding: 15px;
    border-bottom: ${(props) =>
        props.clicked ? '1px solid #0099cc;' : 'none'};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    transition: 0.2s background-color ease-in-out;

    &:hover {
        color: #0099cc;
        background-color: rgba(51, 153, 255, 0.2);
    }
`;

const Atag = styled.a`
    color: ${(props) => (props.clicked ? '#0099cc' : 'black')};
`;

export default Header;
