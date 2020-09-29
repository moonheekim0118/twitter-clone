import React from 'react';
import { Button} from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const Wrapper = styled.div`
    display:inline-block;
`

const ImageWrapper=styled.img`
    width:200px;
`   

const ImagePath=()=>{
    const imagePaths = useSelector((state)=>state.post.imagePaths);
    return(
        <div>
        {imagePaths.map((v)=>(
            <Wrapper key={v}>
                <ImageWrapper src={v} alt={v}/>
                <div>
                    <Button>제거</Button>
                </div>
            </Wrapper>
        ))}
        </div>
    );

}

export default ImagePath;