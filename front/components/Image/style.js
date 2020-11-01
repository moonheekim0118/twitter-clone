import styled from 'styled-components';
import { CloseCircleOutlined } from '@ant-design/icons';
// image 관련 스타일링 

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
    margin-top:${({theme})=>theme.margins.xxxl};
    margin-bottom:${({theme})=>theme.margins.xxxl};
`;

export const ImageWrapper=styled.div`
    flex-grow:1;    
    position:relative;
    width:${props=>`${100/props.number}%`};
    margin:3px;
`;
 
export const ImageWrapperColumn=styled.div`
    display:flex;
    flex-grow:1;
    flex-direction:column;
    width:50%;
`;


export const Image=styled.img`
   display:inline-block;
   flex-grow:1;
   width: 100%;
   height: ${props=>props.height==="true"?"150px":"300px"};
   object-fit:cover;
   border-radius:10px;
`   

export const RemoveButton=styled(CloseCircleOutlined)`
    position:absolute;
    top:5px;
    right:5px;

    font-size:${({theme})=>theme.fontSizes.xl};
    color:${({theme})=>theme.colors.black};    
    cursor:pointer;
    z-index:100;
    
    &:hover{
        color:red;
    }
`;
