import styled from 'styled-components';


export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor:pointer;
    font-size:${({theme})=>theme.fontSizes.xl};
    font-weight:bold;
`;

export const Menu = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:50%;
    text-align:center;
    transition: 0.2s background-color ease-in-out;
    
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;


export const Atag = styled.a`
    color:${props=>props.clicked ? "#0099cc" : "black"};
`;