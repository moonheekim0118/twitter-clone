import styled  from 'styled-components';

export const Wrapper = styled.div`
    z-index:7000;
`;

export const IndicatorWrapper= styled.div`
    position: fixed;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size:${({theme})=>theme.fontSizes.buttonSize};
    color:${({theme})=>theme.colors.white};
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    z-index:7000;
`;

export const ImageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:7000;
    transform: translate(-50%, -50%);
    & img {
        margin:${({theme})=>theme.margins.base}; auto;
        max-height:70vmax;
        max-width:70vmin;
    }
`;