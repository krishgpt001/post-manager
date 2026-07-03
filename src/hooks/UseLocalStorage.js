import { useState } from 'react'
import seedPosts from '../utils/seedData'

function useLocalStorage(){
    const [posts, setposts] = useState(() => {
        const stored = localStorage.getItem('posts')
        return stored ? JSON.parse(stored) : seedPosts
    })

    const savePosts = (newPosts) => {
        setposts(newPosts)
        localStorage.setItem('posts',JSON.stringify(newPosts))
    }

    const createPost = (postData) => {  
        const newPost = {
            id: crypto.randomUUID(),
            ...postData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        savePosts([...posts, newPost])
    }

    const editPost = (id, updatedData) => {
        const updatedPosts = posts.map(post =>
            post.id === id
            ? { ...post, ...updatedData, updatedAt: new Date().toISOString() }
            : post
        )
        savePosts(updatedPosts)
    }

    const deletePost = (id) => {
        const remaining = posts.filter(post => post.id !== id)
        savePosts(remaining)
    }

    return {
        posts,
        createPost,
        editPost,
        deletePost,
    }
}

export default useLocalStorage