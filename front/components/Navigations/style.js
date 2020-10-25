import styled from 'styled-components';

export const MenuItemWrapper = styled.div`
    display:flex;
    cursor:pointer;
    margin-bottom:${({theme})=>theme.margins.base};
    padding:${({theme})=>theme.paddings.base};
    border-radius:20px;
    transition: 0.2s background-color ease-in-out;
    background:${(props)=>props.visit?'rgba(153, 204, 255,0.2)':'none'};

    @media ${({theme})=>theme.device.pcS}{
        border-radius:50%;
        margin-right:0;
    }


    &:hover{
        background:${({theme})=>theme.colors.hover};
    }
`;

export const Detail=styled.div`
    flex-grow: 0;
    flex-shrink: 2;
    flex-basis: 90%;
    margin-left:${({theme})=>theme.margins.base};
    display:flex;
    justify-content:space-between;
    color:inherit;

    @media ${({theme})=>theme.device.pcS}{
        display:none;
    }
`; 
