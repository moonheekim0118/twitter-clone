import styled from 'styled-components';

export const Header = styled.header`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    text-align: center;
    height: 50px;
    padding: ${({ theme }) => `${theme.paddings.xl} ${theme.paddings.base}`};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_3};
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 10;

    @media ${({ theme }) => theme.device.tablet} {
        padding-top: ${({ theme }) => theme.paddings.base};
        border: none;
        position: relative;
    }
`;

export const Main = styled.section`
    width: 50%;
    height: 100%;
    margin: ${({ theme }) => theme.margins.xl} auto;

    @media ${({ theme }) => theme.device.tablet} {
        width: 70% !important;
        padding: 0 !important;
    }

    @media ${({ theme }) => theme.device.pcS} {
        width: 65%;
        padding-right: 80px;
    }
`;

export const Side = styled.section`
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    max-height: 1000px;

    margin-left: 25px;
    border-left: 2px solid ${({ theme }) => theme.colors.gray_3};
    background: ${({ theme }) => theme.colors.white};

    z-index: 20;

    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    }
`;

export const Footer = styled.footer`
    text-align: center;
    padding: ${({ theme }) => theme.paddings.base};
`;

export const Description = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`;

export const DescriptionWithoutLink = styled.div`
    position: relative;
    margin: 0 auto;
    width: 50%;
    text-align: center;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    color: ${({ theme }) => theme.colors.black};
`;
