import React from 'react';
import Blogcard from '../components/BlogTemplate';


let Mainer = ()=>{
    return(
        <div>
            <div className='new_or_hot'>
                <button>The Newest</button>
                <button>The Hottest</button>
            </div>
            <main className='Mainer'>
                <Blogcard></Blogcard>
            </main>
        </div>
    )
}


export default Mainer;