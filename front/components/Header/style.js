import styled from 'styled-components';


export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor:pointer;
    font-size:${({theme})=>theme.fontSizes.xl};
    font-weight:bold;
`;

export const First = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:50%;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;

export const Second = styled.div`
    border-bottom:${props=>props.clicked ? "1px solid #0099cc;" : "none"};
    color:${props=>props.clicked ? "#0099cc" : "black"};
    width:50%;
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    text-align:center;
    &:hover{
        color:#0099cc;
        background-color:rgba(51, 153, 255,0.2)
    }
`;
