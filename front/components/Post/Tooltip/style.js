import styled  from 'styled-components';

export const Container = styled.div`
    position:relative;
    width: fit-content;
    height: fit-content;

    &:hover > .tooltip,
    &:active > .tooltip {
        display:flex;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    right:-10px;
    bottom:12px;
    border-radius:5px;
    background-color:${({theme})=>theme.colors.white};
    width:200px;
    -webkit-box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);
    box-shadow: 1px 2px 6px -1px rgba(0,0,0,0.75);

    z-index:2000;
    display:none;
    flex-direction:column;

    font-size:${({theme})=>theme.fontSizes.base};
    
`;


export const ItemWrapper=styled.div`
    cursor:pointer;
    transition: 0.2s background-color ease-in-out;
    
    &:hover{
        background-color:${({theme})=>theme.colors.hover_gray};
    }
`;

export const Item =styled.div`
    padding:${({theme})=>theme.paddings.xl};

`