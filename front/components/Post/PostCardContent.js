import React ,{ useCallback }from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// 해시태그 

const PostCardContent=({postData})=>{
    const onClickHashTag=useCallback((e)=>{
        e.stopPropagation();
    },[])
    return(
        <>
        {postData.split(/(#[^\s#]+)/g).map((v,i)=>{
            if(v.match((/(#[^\s#]+)/))){
            return <Link onClick={onClickHashTag} href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
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