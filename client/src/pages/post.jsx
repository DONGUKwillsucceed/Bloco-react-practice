import React, { useState } from 'react';
import { addPost } from '../data/postings';
import {Link} from 'react-router-dom';


let Post = ()=>{

    const [title, settitle]=useState('');
    const [context, setcontext]=useState('');

    const onTitleChange = (event)=>{
        settitle(event.currentTarget.value);
    }
    const onContentChange = (event) =>{
        setcontext(event.currentTarget.value);
    }
    const _onClick = (e)=>{
        if(e){
            addPost(title, context);
        }
        else{
            alert('Wrong!!');
        }
    }


    return(
        <div>

            <main className='Posting_Board'>

                <div className='Post_Title'>
                    <p>제목</p>
                    <input onChange={onTitleChange} defaultValue={title} name='title'/>
                    
                </div>

                <div className='Post_Context'>
                    <textarea onChange={onContentChange} defaultValue={context} name='context'/>
                </div>
                
                <Link to='/mypage/post/1'>
                    <button type='button' onClick={_onClick}>Submit</button>
                </Link>

            </main>

        </div>
    )
}


export default Post;