import styled from 'styled-components';
import { AreaChartOutlined } from '@ant-design/icons';
import TextareaAutosize from 'react-textarea-autosize';
// Avatr Wrapper는 공유

export const FormWrapper = styled.form`
    margin-top:${({theme})=>theme.margins.xxl};
    margin-bottom:${({theme})=>theme.margins.xxxl};
    padding:${({theme})=>theme.paddings.xxxl};
    padding-bottom:0;
    position:relative;
    width:100%;
    min-height:130px;
    height: auto;
    display:flex;   
    flex-direction: row;
    border:${(props)=>props.noborder ? "none": '1px solid #f4f4f4'}
`;

export const FormMeta= styled.div`
    position:relative;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 90%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    padding:0 ${({theme})=>theme.paddings.xxxl};
    margin-left:${({theme})=>theme.margins.xxxl};
`
;
export const TextArea = styled(TextareaAutosize)`
    width:100%;
    border:none;
    resize: none;
    font-size:${({theme})=>theme.fontSizes.lg}; 
`;

export const Buttons = styled.div`
    border-top:1px solid ${({theme})=>theme.colors.gray_3}; 
    font-size:${({theme})=>theme.fontSizes.lg};
    margin-top:${({theme})=>theme.margins.xsmall};
    padding:${({theme})=>theme.paddings.base} 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:relative;
    color:${({theme})=>theme.colors.blue_2};

`;

export const ImageButtonIcon=styled(AreaChartOutlined)`
    border-radius:50%;
    cursor:pointer;
    padding:${({theme})=>theme.paddings.lg};
    &:hover{
        background-color:${({theme})=>theme.colors.hover};
    }
`;

export const TweetButton=styled.button`
    border:none;
    background-color:${({theme})=>theme.colors.blue_1};
    color:${({theme})=>theme.colors.white};
    font-size:${({theme})=>theme.fontSizes.base};
    font-weight:bold;
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    border-radius:25px;

    &:hover{
        background-color:${({theme})=>theme.colors.blue_2};
    }

    &:disabled{
        background-color:${({theme})=>theme.colors.disabled};
        cursor:default;
    }
`;

export const TextLength = styled.span`
    position:absolute;
    top:18px;
    right:100px;
    font-size: ${({theme})=>theme.fontSizes.base};
    color:${(props)=>props.limit? 'red' : `${({theme})=>theme.colors.blue_2}`}
`;