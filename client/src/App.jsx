import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/auth',
        element: <Auth />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
