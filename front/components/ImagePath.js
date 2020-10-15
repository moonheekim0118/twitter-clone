import React, {useCallback} from 'react';
import { Button} from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Wrapper = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
`;

const ImageWrapperUnderTwo=styled.div`
    flex-grow:1;
    width:${props=>`${100/props.number}%`};
    margin:3px;
`;

const ImageWrapperThree=styled.div`
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

const ImagePath=()=>{
    const imagePaths = useSelector((state)=>state.post.imagePaths);

    const onRemoveImage=useCallback((index)=>()=>{
        
    });

    if(imagePaths.length<=2){
        return(
            <Wrapper>
            {imagePaths.map((v, i)=>(
                <ImageWrapperUnderTwo key={0} number={imagePaths.length} >
                    <Image height="false" src={`http://localhost:3065/${v}`} alt={v}/>
                </ImageWrapperUnderTwo>
            ))}
            </Wrapper>
        );
    }

    if(imagePaths.length===3){
        return(
            <Wrapper>
               <ImageWrapperUnderTwo key={0} number={2} >
                   <Image  height="false" src={`http://localhost:3065/${imagePaths[0]}`}/>
               </ImageWrapperUnderTwo>
               <ImageWrapperThree>
                    <ImageWrapperUnderTwo key={1} number={1} >
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[1]}`}/>
                    </ImageWrapperUnderTwo>
                    <ImageWrapperUnderTwo key={2} number={1}>
                        <Image height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
                    </ImageWrapperUnderTwo>
               </ImageWrapperThree>
            </Wrapper>
        )
    }
    
    if(imagePaths.length===4){
        return(
            <Wrapper>
                <ImageWrapperThree>
                    <ImageWrapperUnderTwo key={0} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[0]}`}/>
                    </ImageWrapperUnderTwo>
                    <ImageWrapperUnderTwo key={1} number={1} height="true">
                        <Image  height="true"src={`http://localhost:3065/${imagePaths[1]}`}/>
                    </ImageWrapperUnderTwo>
               </ImageWrapperThree>
               <ImageWrapperThree>
                    <ImageWrapperUnderTwo key={2} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[2]}`}/>
                    </ImageWrapperUnderTwo>
                    <ImageWrapperUnderTwo key={3} number={1} height="true">
                        <Image  height="true" src={`http://localhost:3065/${imagePaths[3]}`}/>
                    </ImageWrapperUnderTwo>
               </ImageWrapperThree>
            </Wrapper>
        )
    }

}

export default ImagePath;