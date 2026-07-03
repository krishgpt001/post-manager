import PostForm from "../components/PostForm"
import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

function PostCreate () {
    const { createPost } = useLocalStorage()
    const navigate = useNavigate()

    const handleSubmit = (formData) => {
        createPost(formData)
        navigate('/')
    }

    const initialData = {title:'',author:'',content:'',tags:''}

    return (
        <div>
            <h4>New Post</h4>
            <PostForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
    )
}   

export default PostCreate