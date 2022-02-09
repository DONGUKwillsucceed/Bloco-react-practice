import React, {memo} from 'react';
import {getAllPost} from '../data/postings';


let Blogcard = memo(()=>{

    const posts = getAllPost();
    return(
        <div className='blogcard'>

            <div className='blogImage'>
                <img src= {posts[0].img}/>
            </div>

            <div className='blogTitle'>
                <p><strong>{posts[0].title}</strong></p>
            </div>

            <div className='blogAbout'>
                <p>{posts[0].author}</p>
                <p>{posts[0].date}</p>
            </div>
        </div>
    )
})

export default Blogcard;