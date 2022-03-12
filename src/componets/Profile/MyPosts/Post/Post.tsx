import React from 'react';
import s from './Post.module.css';

type messagePropsType = {
    message: string
    likes: number
}

function Post(props:messagePropsType) {
    return (
        <div className={s.item}>
                <img src="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"/>
                <div className={s.message}>{props.message}</div>


        </div>
    )
}

export default Post;

