import React from 'react';
import Blogcard from '../components/BlogTemplate';
import {Link} from 'react-router-dom';
import { getLength } from '../data/postings';


let Mypage = ()=>{
    return(
        <div className='Mypage'>
            <div className='profileZone'>
                <div className='profile'>
                    <div className='profile_img'>
                        <img src='logo192.png'/>
                    </div>

                    <div className='profile_info'>

                        <p>KingDongUk</p>

                        <div className='ed_ing_pst_Count'>

                            <div className='count'>

                                <p>Subcribers</p>
                                <p><strong>5</strong></p>

                            </div>
                            
                            <div className='count'>
                                <p>Subscribing</p>
                                <p><strong>10</strong></p>
                            </div>

                            <div className='count'>
                                <p>Postings </p>
                                <p><strong>{getLength()}</strong></p>
                            </div>

                        </div>

                        <div className='buttons'>
                            <Link to='/mypage/post'>
                                <button>프로필 수정</button>
                            </Link>
                            <Link to='/mypage/post'>
                                <button>글쓰기</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className='Postings'>
                <Blogcard/>
            </div>
        </div>
    )
}

export default Mypage;