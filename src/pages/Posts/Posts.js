import {useEffect, useRef, useState} from "react";

import {Button, Loader, Modal, Pagination, PostFilter, PostForm, PostList, Select} from "../../components";
import PostService from "../../API/PostService";
import {getPageCount} from "../../utils/pages";
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import {useObserver} from "../../hooks/useObserver";

const Posts =()=> {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="app">
            <Button  onClick={() => setModal(true)}>
                Create user
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <Select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Elements on page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show all'},
                ]}
            />
            {postError &&
                <h1>Error happened ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostsLoading &&
                <div><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export {Posts};