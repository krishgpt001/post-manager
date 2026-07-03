import useLocalStorage from '../hooks/useLocalStorage'
import PostCard from '../components/PostCard'
import { useState } from 'react'
import Pagination from '../components/Pagination'

function PostList() {
  const { posts, deletePost } = useLocalStorage()
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postPerPage = 5

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPosts.length/postPerPage)
  const startIndex = (currentPage-1)*postPerPage
  const endIndex = startIndex + postPerPage
  const currentPosts = filteredPosts.slice(startIndex,endIndex)

  return (
    <div>
      <div className="pm-page-header">
        <h4 className="pm-page-title">All Posts</h4>
        <small className="pm-post-count">{filteredPosts.length} posts</small>
      </div>

      <div className="pm-search-wrap">
        <span className="pm-search-icon">🔍</span>
        <input type="text" className="pm-search-input" value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1)}} placeholder="Search by title..."/>
      </div>

      {currentPosts.length === 0 && (<div className="pm-empty"><p>No posts found.</p></div>)}
      {currentPosts.map(post => (<PostCard key={post.id} post={post} onDelete={deletePost}/>))}
      {totalPages > 1 && (<Pagination existPages={totalPages} activePage={currentPage} changePage={setCurrentPage}/>)}
    </div>
  )
}

export default PostList