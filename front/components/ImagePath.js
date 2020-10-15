import React, {useCallback} from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {removeImageRequest} from '../actions/post';

const Wrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
`;

const ImageWrapper=styled.div`
    position:relative;
    flex-grow:1;
    width:${props=>`${100/props.number}%`};
    margin:3px;
`;

const ImageWrapperColumn=styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    width:50%;
`;


const Image=styled.img`
  display:inline-block;
   border-radius:10px;
   width: 100%;
   height: ${props=>props.height==="true"?"150px":"300px"};
   flex-grow:1;
`   

const RemoveButton=styled(CloseCircleOutlined)`
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

const ImagePath=()=>{
    const imagePaths = useSelector((state)=>state.post.imagePaths);
    const dispatch = useDispatch();

    const onRemoveImage=useCallback((index)=>{
        dispatch(removeImageRequest(index));
    },[]);

    if(imagePaths.length===1){
        return(
            <Wrapper>
                <ImageWrapper key={0} number={1} >
                    <Image height="false" src={`http://localhost:3065/${imagePaths[0]}`} alt={imagePaths[0]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                </ImageWrapper>
            </Wrapper>
        )
    }
    if(imagePaths.length===2){
        return(
            <Wrapper>
                 <ImageWrapper key={0} number={2} >
                    <Image height="false" src={`http://localhost:3065/${imagePaths[0]}`} alt={imagePaths[0]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                </ImageWrapper>
                <ImageWrapper key={1} number={2} >
                    <Image height="false" src={`http://localhost:3065/${imagePaths[1]}`} alt={imagePaths[1]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                </ImageWrapper>
            </Wrapper>
        );
    }

    if(imagePaths.length===3){
        return(
            <Wrapper>
               <ImageWrapper key={0} number={2} >
                   <Image  height="false" src={`http://localhost:3065/${imagePaths[0]}`}/>
                   <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
               </ImageWrapper>
               <ImageWrapperColumn>
                    <ImageWrapper key={1} number={1} >
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[1]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                    </ImageWrapper>
                    <ImageWrapper key={2} number={1}>
                        <Image height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,2)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
            </Wrapper>
        )
    }
    
    if(imagePaths.length===4){
        return(
            <Wrapper>
                <ImageWrapperColumn>
                    <ImageWrapper key={0} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[0]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                    </ImageWrapper>
                    <ImageWrapper key={1} number={1} height="true">
                        <Image  height="true"src={`http://localhost:3065/${imagePaths[1]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
               <ImageWrapperColumn>
                    <ImageWrapper key={2} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,2)}/>
                    </ImageWrapper>
                    <ImageWrapper key={3} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[3]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,3)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
            </Wrapper>
        )
    }
    else{
        return(<></>)
    }
}

export default ImagePath;