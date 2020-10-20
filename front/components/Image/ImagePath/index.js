import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeImageAction } from '../../../actions/post';
import { Wrapper, ImageWrapper, ImageWrapperColumn ,Image, RemoveButton } from '../style';

const ImagePath=()=>{
    const imagePaths = useSelector((state)=>state.post.imagePaths);
    const dispatch = useDispatch();

    const onRemoveImage=useCallback((index)=>{
        dispatch(removeImageAction(index));
    },[]);

    if(imagePaths.length===1){
        return(
            <Wrapper>
                <ImageWrapper key={0} number={1} >
                    <Image role="presentation" height="false" src={`http://localhost:3065/${imagePaths[0]}`} alt={imagePaths[0]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                </ImageWrapper>
            </Wrapper>
        )
    }
    if(imagePaths.length===2){
        return(
            <Wrapper>
                 <ImageWrapper key={0} number={2} >
                    <Image role="presentation" height="false" src={`http://localhost:3065/${imagePaths[0]}`} alt={imagePaths[0]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                </ImageWrapper>
                <ImageWrapper key={1} number={2} >
                    <Image role="presentation" height="false" src={`http://localhost:3065/${imagePaths[1]}`} alt={imagePaths[1]}/>
                    <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                </ImageWrapper>
            </Wrapper>
        );
    }

    if(imagePaths.length===3){
        return(
            <Wrapper>
               <ImageWrapper key={0} number={2} >
                   <Image role="presentation" height="false" src={`http://localhost:3065/${imagePaths[0]}`}/>
                   <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
               </ImageWrapper>
               <ImageWrapperColumn>
                    <ImageWrapper key={1} number={1} >
                        <Image role="presentation" height="true" src={`http://localhost:3065/${imagePaths[1]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                    </ImageWrapper>
                    <ImageWrapper key={2} number={1}>
                        <Image role="presentation" height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
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
                        <Image role="presentation" height="true" src={`http://localhost:3065/${imagePaths[0]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,0)}/>
                    </ImageWrapper>
                    <ImageWrapper key={1} number={1} height="true">
                        <Image role="presentation"  height="true"src={`http://localhost:3065/${imagePaths[1]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,1)}/>
                    </ImageWrapper>
               </ImageWrapperColumn>
               <ImageWrapperColumn>
                    <ImageWrapper key={2} number={1} height="true">
                        <Image role="presentation" height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
                        <RemoveButton onClick={onRemoveImage.bind(this,2)}/>
                    </ImageWrapper>
                    <ImageWrapper key={3} number={1} height="true">
                        <Image role="presentation" height="true" src={`http://localhost:3065/${imagePaths[3]}`}/>
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