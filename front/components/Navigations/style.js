import styled from 'styled-components';

export const MenuItemWrapper = styled.div`
    display:flex;
    cursor:pointer;
    margin-bottom:10px;
    padding:10px;
    border-radius:20px;

    @media(max-width:1279px){
        border-radius:50%;
        margin-right:0;
    }


    &:hover{
        background:rgba(128, 223, 255,0.2);
    }
`;

export const Detail=styled.div`
    width:40%;
    margin-left:10px;
    display:flex;
    justify-content:space-between;

    @media(max-width:1279px){
        display:none;
    }
`; 


export const Description=styled.a`
    font-size:1.3rem;
    font-weight:bold;
    color:black;
`;