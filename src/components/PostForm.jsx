import { useState } from 'react'
import validatePost from '../utils/validators'

function PostForm({initialData, onSubmit}) {
  const [formData,setFormData] = useState(initialData)
  const [errors,setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validatePost(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    onSubmit({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    })
  }

  return (
    <form onSubmit={handleSubmit} className="pm-form-card">
      <div className="pm-form-group">
        <label htmlFor="title" className="pm-label">Title</label>
        <input id="title" name="title" type="text" aria-required="true" required className={`pm-input ${errors.title ? 'error' : ''}`} placeholder="My First Post" value={formData.title} onChange={handleChange}/>
        {errors.title && <div className="pm-error-msg">{errors.title}</div>}
      </div>

      <div className="pm-form-group">
        <label htmlFor="author" className="pm-label">Author</label>
        <input id="author" name="author" type="text" aria-required="true" required className={`pm-input ${errors.author ? 'error' : ''}`} placeholder="Your Name" value={formData.author} onChange={handleChange}/>
        {errors.author && <div className="pm-error-msg">{errors.author}</div>}
      </div>

      <div className="pm-form-group">
        <label htmlFor="content" className="pm-label">Content</label>
        <textarea id="content" name="content" aria-required="true" required className={`pm-textarea ${errors.content ? 'error' : ''}`} placeholder="Enter content for post..." value={formData.content} onChange={handleChange} rows={6}/>
        {errors.content && <div className="pm-error-msg">{errors.content}</div>}
      </div>

      <div className="pm-form-group">
        <label htmlFor="tags" className="pm-label">Tags</label>
        <input id="tags" name="tags" type="text" className={`pm-input ${errors.tags ? 'error' : ''}`} placeholder='react, hooks, javascript' value={formData.tags} onChange={handleChange} aria-required="false" />
        {errors.tags && <div className="pm-error-msg">{errors.tags}</div>}
        <div className="pm-hint">Separate tags with commas</div>
      </div>

      <div className="pm-form-actions">
        <button type="submit" className="pm-btn-primary">Save Post</button>
      </div>
    </form>
  )
}

export default PostForm