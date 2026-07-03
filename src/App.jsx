import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('pm-dark')
      return stored ? JSON.parse(stored) : false
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('pm-dark', JSON.stringify(darkMode))
    } catch (e) {
      // ignore
    }
  }, [darkMode])

  return (
    <div data-bs-theme={darkMode ? 'dark' : 'light'} className='d-flex vh-100' style={{background: darkMode ? '#0a0f1a' : '#f8f9fa',transition: 'background 0.3s'}}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main" className="flex-grow-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App