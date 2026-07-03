import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate, useParams } from "react-router-dom"

function PostView () {
    const { posts } = useLocalStorage()
    const { id } = useParams()
    const navigate = useNavigate()

    const post = posts.find(post => post.id === id)
    if (!post) {
        return (
            <div className="pm-empty">
                <div className="pm-empty-icon">📭</div>
                <p>Post not found</p>
                <button className="pm-btn-primary mt-3" onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        )
    }

    return (
        <div className="pm-view-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="pm-btn pm-btn-secondary" onClick={() => navigate('/')}>← Back</button>
                <button className="pm-btn-primary" onClick={() => navigate(`/posts/${id}/edit`)}>Edit Post</button>
            </div>
            <h2 className="pm-view-title">{post.title}</h2>
            <div className="pm-view-meta">
                <span>✍️ {post.author}</span>
                <span>📅 Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                <span>🔄 Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
            </div>
            <p className="pm-view-content">{post.content}</p>
            <div className="pm-tags">
                {post.tags.map(tag => (
                    <span key={tag} className="pm-tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default PostView