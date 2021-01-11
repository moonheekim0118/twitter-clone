import styled from 'styled-components';

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.form`
    position: relative;
    width: 50%;

    padding: 3rem 2.2rem 2.2rem 2.2rem;
    margin: 50px auto;

    border: none;
    border-radius: 30px;

    background: ${({ theme }) => theme.colors.gradient};

    @media ${({ theme }) => theme.device.tabletL} {
        width: 90%;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-50%);

    padding: 0 0.3rem;
    margin: 0 0.5rem;

    border-radius: 5px;

    font-size: ${({ theme }) => theme.fontSizes.base};

    color: ${({ theme }) => theme.colors.gray_2};
    background-color: ${({ theme }) => theme.colors.white};

    pointer-events: none;
    transition: 0.2s color ease-in-out;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 2rem auto;
    color: ${({ theme }) => theme.colors.black};
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    padding: ${({ theme }) => theme.paddings.base}
        ${({ theme }) => theme.colors.small};

    border-radius: 5px;
    border: none;
    outline: none;

    font-size: ${({ theme }) => theme.fontSizes.small};

    color: ${({ theme }) => theme.colors.gray_2};
    background-color: ${({ theme }) => theme.colors.white};

    &:focus + label {
        color: ${({ theme }) => theme.colors.blue_2};
    }
`;

export const PasswordInput = styled.input.attrs({ type: 'password' })`
    width: 100%;
    padding: ${({ theme }) => theme.paddings.base}
        ${({ theme }) => theme.colors.small};

    border: none;
    border-radius: 5px;
    outline: none;

    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray_2};

    &:focus + label {
        color: ${({ theme }) => theme.colors.blue_2};
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: ${({ theme }) => theme.paddings.small}
        ${({ theme }) => theme.paddings.xxl};
    border: none;
    border-radius: 5px;

    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue_2};

    cursor: pointer;
    transition: 0.2s background-color ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue_1};
    }
`;

export const Text = styled.a`
    margin-top:${({ theme }) => theme.margins.xxl};
    font-weight:bold;
    color:${({ theme }) => theme.colors.white};
    cursor-pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TextLength = styled.span`
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${(props) => (props.limit ? 'red' : 'gray')};
`;
