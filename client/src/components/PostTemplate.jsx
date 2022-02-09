import React from 'react';

let PostTemplate = (props)=>{
    return(
        <div>

            <main className='Posting_Board'>

                <div className='Post_Title'>
                    <p>제목</p>
                    <p className='Post_result'>{props.value.title}</p>
                    
                </div>

                <div className='Post_Context'>

                    <p className='Post_result'>{props.value.content}</p>
                    
                </div>

            </main>

        </div>
    )
}

export default PostTemplate;