import { createBrowserRouter } from "react-router-dom";

import Layout from './Components/Layout'
import Home from './pages/home'
import NotFound from './pages/notFound'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router