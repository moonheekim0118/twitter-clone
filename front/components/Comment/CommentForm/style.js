import styled from 'styled-components';


export const Wrapper = styled.div`
    width:100%;
    position:relative;
    padding-bottom:${({theme})=>theme.paddings.xxxl};
    margin-bottom:${({theme})=>theme.margins.xxl};
`;

export const ButtonWrapper = styled.div`
    position:absolute;
    bottom:-10px;
    right:0;
`;