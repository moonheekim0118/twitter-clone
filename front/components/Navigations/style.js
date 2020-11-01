import styled from 'styled-components';

export const Detail=styled.div`
    display:flex;
    justify-content:space-between;
    color:inherit;
    flex-grow: 0;
    flex-shrink: 2;
    flex-basis: 90%;
    margin-left:${({theme})=>theme.margins.base};

    @media ${({theme})=>theme.device.pcS}{
        display:none;
    }
`; 
