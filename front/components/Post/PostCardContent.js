import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
// 해시태그 

const PostCardContent=({postData})=>{
    return(
        <>
        {postData.split(/(#[^\s#]+)/g).map((v,i)=>{
            if(v.match((/(#[^\s#]+)/))){
            return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
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