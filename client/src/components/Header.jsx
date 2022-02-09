import React, {memo} from 'react';
import {Link} from 'react-router-dom';

let Header = memo((props)=>{
    return (
        <header>
            <div className='Header'>
                <h1><Link to='/'>Bloco</Link></h1>

                <div className='Header_Input'>
                <input placeholder={props.value}></input>
                </div>

                <nav>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/friends'>friends</Link></li>
                        <li><Link to='/mypage'>my page</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
})

export default Header;