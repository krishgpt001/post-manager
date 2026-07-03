import { createBrowserRouter } from "react-router-dom";
import App from './App'
import PostList from './pages/PostList'
import PostCreate from './pages/PostCreate'
import PostEdit from './pages/PostEdit'
import PostView from './pages/PostView'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            { index: true, element: <PostList /> },
            { path: 'posts/new', element: <PostCreate /> },
            { path: 'posts/:id', element: <PostView /> },
            { path: 'posts/:id/edit', element: <PostEdit /> },
        ]
    }
])

export default router