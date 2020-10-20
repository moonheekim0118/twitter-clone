import React , { useCallback }from 'react';
import PropTypes from 'prop-types';
import { HashTag } from './style';
// 해시태그 

const PostCardContent=({postData})=>{

    const onClickHashTag=useCallback((hashtag)=>{
        window.open(`/hashtag/${hashtag}`,'_self'); 
    },[])

    return(
        <>
        {postData.split(/(#[^\s#]+)/g).map((v,i)=>{
            if(v.match((/(#[^\s#]+)/))){
            return <HashTag key={i} onClick={onClickHashTag.bind(this,v.slice(1))}>{v}</HashTag>
            }
            return v;
        })}
        </>
    )
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
}

export default PostCardContent;