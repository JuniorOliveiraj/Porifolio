import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from '../dashboard2/src_dashboard/layouts/dashboard';
import LogoOnlyLayout from '../dashboard2/src_dashboard/layouts/LogoOnlyLayout';
//
import Blog from '../dashboard2/src_dashboard/pages/Blog';
import User from '../dashboard2/src_dashboard/pages/User';
import Login from '../dashboard2/src_dashboard/pages/Login';
import NotFound from '../dashboard2/src_dashboard/pages/Page404';
import Register from '../dashboard2/src_dashboard/pages/Register';
import Products from '../dashboard2/src_dashboard/pages/Products';
import DashboardApp from '../dashboard2/src_dashboard/pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/dashboard',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  
  ]);
}
