import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import SubscriberAuth from './pages/Auth/SubscriberAuth';
import HomeownerAuth from './pages/Auth/HomeownerAuth';

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
        path: '/auth/subscriber',
        element: <SubscriberAuth />,
    },
    {
        path: '/auth/homeowner',
        element: <HomeownerAuth />,
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
