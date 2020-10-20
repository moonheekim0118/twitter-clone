import styled from 'styled-components';
import { CloseCircleOutlined } from '@ant-design/icons';
// image 관련 스타일링 

export const Wrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
`;

export const ImageWrapper=styled.div`
    position:relative;
    flex-grow:1;
    width:${props=>`${100/props.number}%`};
    margin:3px;
`;
 
export const ImageWrapperColumn=styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    width:50%;
`;


export const Image=styled.img`
  display:inline-block;
   border-radius:10px;
   width: 100%;
   height: ${props=>props.height==="true"?"150px":"300px"};
   flex-grow:1;
`   

export const RemoveButton=styled(CloseCircleOutlined)`
    position:absolute;
    top:5px;
    right:5px;
    color:black;    
    z-index:100;
    font-size:1.5rem;
    cursor:pointer;

    &:hover{
        color:red;
    }
`;
