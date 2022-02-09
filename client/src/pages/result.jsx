import React from 'react';
import PostTemplate from '../components/PostTemplate';
import { getLatestPost } from '../data/postings';


let result = ()=>{

    const post = getLatestPost();
    console.log(post);
    return(
        <PostTemplate value={post}/>
    )
}

export default result;