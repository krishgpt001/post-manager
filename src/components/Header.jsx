import { Link, useLocation } from 'react-router-dom'

function Header({ darkMode, setDarkMode }) {
  const location = useLocation()

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <div className="pm-sidebar d-none d-md-flex">

        <div className="pm-brand">
          📝 Post Manager
        </div>

        <nav className="d-flex flex-column gap-1" aria-label="Main navigation">
          <Link
            to="/"
            className={`pm-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            📋 All Posts
          </Link>
          <Link
            to="/posts/new"
            className={`pm-nav-link ${location.pathname === '/posts/new' ? 'active' : ''}`}
            aria-current={location.pathname === '/posts/new' ? 'page' : undefined}
          >
            ✏️ New Post
          </Link>
        </nav>

        <div className="pm-sidebar-bottom">
          <div className="pm-toggle-row" onClick={() => setDarkMode(!darkMode)}>
            <span>{darkMode ? '☀️ Light' : '🌙 Dark'}</span>
            <div
              className="pm-toggle-pill"
              style={{ background: darkMode ? '#1a73e8' : 'rgba(255,255,255,0.25)' }}
            >
              <div
                className="pm-toggle-dot"
                style={{ left: darkMode ? '19px' : '3px' }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Mobile navbar ── */}
      <nav className="pm-mobile-nav d-md-none" aria-label="Mobile navigation">
        <span className="pm-mobile-brand">📝 Post Manager</span>
        <div className="pm-mobile-links">
          <Link to="/" className="pm-mobile-link" aria-current={location.pathname === '/' ? 'page' : undefined}>All Posts</Link>
          <Link to="/posts/new" className="pm-mobile-link" aria-current={location.pathname === '/posts/new' ? 'page' : undefined}>New Post</Link>
          <span
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: 'pointer', fontSize: '18px' }}
          >
            {darkMode ? '☀️' : '🌙'}
          </span>
        </div>
      </nav>

      <div className="d-md-none" style={{ height: '56px' }} />
    </>
  )
}

export default Header