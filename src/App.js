import React, {useState} from "react";

import "./styles/App.css"
import {Button, Input, PostList} from "./components";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript", body: "Description"},
        {id: 3, title: "Javascript", body: "Description"}
    ]);

    const [post, setPost] = useState({title: "", body: ""});


    const addNewPost = (e) => {
        e.preventDefault()
        //
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: "", body: ""})
    }


    return (
        <div className={"app"}>
            <form>
                <Input
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder={"Posts name"}/>
                <Input
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder={"Posts description"}/>
                <Button onClick={addNewPost}>Create post</Button>
            </form>
            <PostList posts={posts} title="JS posts"/>
        </div>
    );
}

export default App;
