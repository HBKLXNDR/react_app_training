import React, {useState} from 'react';

import {Input} from "../Input/Input";
import {Button} from "../Button/Button";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Post's name"
            />
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Post's description"
            />
            <Button onClick={addNewPost}>Create post</Button>
        </form>
    );
};


export {PostForm};