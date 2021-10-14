import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from "./MyPostsContainer";


function MyPosts(props: MyPostsPropsType) {
    const onAddPost = () => {
        props.addPost()
    };
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    };

    const postElements = props.posts.map((p) => <Post message={p.message} likes={p.likes} key={p.id}/>)
    return (
        <div className={s.main}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>

    )
}

export default MyPosts;