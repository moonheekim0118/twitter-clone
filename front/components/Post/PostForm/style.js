import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
// Avatr Wrapper는 공유

export const FormWrapper = styled.form`
    display:flex;   
    flex-direction: row;

    position:relative;
    width:100%
    height: auto;
    min-height:${(props) => (props.small ? '50px' : '130px')};

    margin-top:${({ theme }) => theme.margins.xxl};
    margin-bottom:${({ theme }) => theme.margins.xxxl};
    padding:${({ theme }) => theme.paddings.xxxl};
    padding-bottom:${(props) => (props.small ? '1rem' : '0')};

    border:${(props) =>
        props.noborder ? '1px solid transparent' : '1px solid #f4f4f4'}
`;

export const FormMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 90%;
    position: relative;

    padding: 0 ${({ theme }) => theme.paddings.xxxl};
    margin-left: ${({ theme }) => theme.margins.xxxl};
`;
export const TextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    resize: none;
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;

    margin-top: ${({ theme }) => theme.margins.xsmall};
    padding: ${({ theme }) => theme.paddings.base} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.gray_3};

    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.blue_2};
`;

export const TextLength = styled.span`
    position: absolute;
    top: 18px;
    right: 100px;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${(props) =>
            props.limit ? 'red' : `${({ theme }) => theme.colors.blue_2}`}${({
            theme,
        }) => theme.colors.blue_2};
`;
