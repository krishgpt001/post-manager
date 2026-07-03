import PostForm from "../components/PostForm"
import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate, useParams } from "react-router-dom"

function PostEdit () {
    const { posts,editPost } = useLocalStorage()
    const navigate = useNavigate()

    const {id} = useParams()
    const post = posts.find(post => post.id === id)
    if (!post) {
        return (
            <div className="text-center mt-5">
            <h5>Post not found</h5>
            <button className="btn btn-outline-primary mt-3" onClick={() => navigate('/')}>
                Back to Home
            </button>
            </div>
        )
    }

    const initialData = { ...post,tags:post.tags.join(', ') }

    const handleSubmit = (formData) => {
        editPost(id,formData)
        navigate('/')
    }

    return (
        <div>
            <h4>Edit Post</h4>
            <PostForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
    )
}

export default PostEdit