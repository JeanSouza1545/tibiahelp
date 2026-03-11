import { createBrowserRouter } from "react-router-dom";

import Layout from './Components/Layout'
import Home from './pages/home'
import ExerciseWeapon from './pages/exerciseWeapon'
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
                path: '/exercise-weapon',
                element: <ExerciseWeapon />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router