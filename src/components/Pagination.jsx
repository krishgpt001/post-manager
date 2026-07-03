function Pagination({ existPages, activePage, changePage }) {
  const pages = Array.from({ length: existPages }, (_, i) => i + 1)

  return (
    <nav className="pm-pagination mt-4" aria-label="Pagination">
      <button aria-label="Previous page" className="pm-page-btn" disabled={activePage === 1} onClick={() => changePage(activePage - 1)}>&larr;</button>
        {pages.map(page => (
          <button key={page} aria-current={activePage === page ? 'page' : undefined} className={`pm-page-btn ${activePage === page ? 'active' : ''}`} onClick={() => changePage(page)}>{page}</button>
        ))}
      <button aria-label="Next page" className="pm-page-btn" disabled={activePage === existPages} onClick={() => changePage(activePage + 1)}>&rarr;</button>
    </nav>
  )
}

export default Pagination