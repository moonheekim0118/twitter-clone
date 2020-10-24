import styled from 'styled-components';

export const Title=styled.span`
    color:${({theme})=>theme.colors.white};
`;

export const Form= styled.form`
    width:50%;
    border-radius:30px;
    background:${({theme})=>theme.colors.gradient};
    border: none;
    padding:3rem 2.2rem 2.2rem 2.2rem;
    margin: 50px auto;
    
    position:relative;

    @media ${({theme})=>theme.device.tabletL} {
        width:90%;
    }
`;


export const Lable = styled.label`
    position:absolute;
    font-size:${({theme})=>theme.fontSizes.base};
    left:0;
    top:0;
    transform:translateY(-50%);
    background-color:${({theme})=>theme.colors.white};
    border-radius:5px;
    color:${({theme})=>theme.colors.gray_2};
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: .1s ease-out;
    transform-origin: left top;
    pointer-events:none;
`;


export const InputWrapper=styled.div`
    width:100%;
    margin:2rem auto;
    color : ${({theme})=>theme.colors.black}; 
    position:relative;
`

export const TextInput = styled.input.attrs({ type: 'text' })`
    font-size:${({theme})=>theme.fontSizes.small};
    background-color: ${({theme})=>theme.colors.white};
    outline:none;
    border: none;
    width:100%;
    border-radius:5px;
    padding:${({theme})=>theme.paddings.base} ${({theme})=>theme.colors.small};
    color:  ${({theme})=>theme.colors.gray_2};
    transition: 0.1s ease-out;

    &:focus + label{
        color: ${({theme})=>theme.colors.blue_2};
    }
`;

export const PasswordInput = styled.input.attrs({ type: 'password' })`
    font-size:${({theme})=>theme.fontSizes.small};
    outline:none;
    border: none;
    width:100%;
    border-radius:5px;
    padding:${({theme})=>theme.paddings.base} ${({theme})=>theme.colors.small};
    color:  ${({theme})=>theme.colors.gray_2};
    transition: 0.1s ease-out;

    &:focus + ${Lable}{
        color: ${({theme})=>theme.colors.blue_2};
    }
`;


export const SubmitButton = styled.button`
    border:none;
    background-color:${({theme})=>theme.colors.blue_2};
    color:${({theme})=>theme.colors.white};

    font-size:${({theme})=>theme.fontSizes.small};
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    border-radius:5px;
    transition: 0.2s background-color ease-in-out;
    width:100%;

    &:hover{
        background-color:${({theme})=>theme.colors.blue_1};
    }
`;

export const Text =styled.a`
    color:${({theme})=>theme.colors.white};
    font-weight:bold;
    cursor-pointer;
    margin-top:${({theme})=>theme.margins.xxl};
`


export const ButtonWrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const TextLength = styled.span`
    position:absolute;
    right:5px;
    top:10px;
    font-size: ${({theme})=>theme.fontSizes.base};
    color:${(props)=>props.limit? 'red' : 'gray'}
`;