import styled from 'styled-components';

export const Container = styled.form`
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    padding: ${({ theme }) => `${theme.paddings.xl} ${theme.paddings.base}`};
    background-color: ${({ theme }) => theme.colors.white};
`;

export const HistoryWrapper = styled.div.attrs({ tabindex: '0' })`
    display: none;
    flex-direction: column;
    width: 100%;
    -webkit-box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
    z-index: 20;

    &:hover {
        display: flex;
    }

    &:focus-within {
        display: flex;
    }
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    height: 35px;
    padding: ${({ theme }) => theme.paddings.small};
    margin-top: ${({ theme }) => theme.margins.small};

    border: none;
    border-radius: 5px;

    font-size: ${({ theme }) => theme.fontSizes.base};
    background-color: ${({ theme }) => theme.colors.gray_3};
    z-index: 20;

    &:focus {
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.blue_1};
    }

    &:focus ~ ${HistoryWrapper} {
        display: flex;
    }
`;

export const SearchButton = styled.button.attrs({ type: 'submit' })`
    position: absolute;
    top: 15px;
    right: 0px;
    height: 34px;

    padding: ${({ theme }) =>
        `${theme.paddings.xsmall} ${theme.paddings.small}`};
    margin-top: ${({ theme }) => theme.margins.small};
    margin-right: ${({ theme }) => theme.margins.xsmall};

    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue_1};

    cursor: pointer;
    z-index: 100;
`;
