import { useNavigate } from "react-router-dom"

function PostCard({ post, onDelete }) {
  const navigate = useNavigate()

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this post?')
    if (confirmed) {
      onDelete(post.id)
    }
  }

  return (
    <div className="pm-card">
      <div className="pm-card-top">
        <div className="left-part-post">
          <h5 className="pm-card-title">{post.title}</h5>
          <p className="pm-card-excerpt">{post.content.slice(0, 100)}...</p>
        </div>
        <div className="pm-card-meta">
          <small className="pm-card-date">{new Date(post.createdAt).toLocaleDateString()}</small>
          <small className="pm-card-author">{post.author}</small>
        </div>
      </div>

      <div className="pm-card-bottom">
        <div className="pm-tags">
          {post.tags.map(tag => (<span key={tag} className="pm-tag">{tag}</span>))}
        </div>
        <div className="pm-actions">
          <button aria-label={`View ${post.title}`} className="pm-btn pm-btn-view" onClick={() => navigate(`/posts/${post.id}`)}>View</button>
          <button aria-label={`Edit ${post.title}`} className="pm-btn pm-btn-edit" onClick={() => navigate(`/posts/${post.id}/edit`)}>Edit</button>
          <button aria-label={`Delete ${post.title}`} className="pm-btn pm-btn-delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default PostCard