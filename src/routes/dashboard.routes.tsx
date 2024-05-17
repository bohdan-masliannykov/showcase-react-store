import { DashboardLayout } from '@/shared/components/templates/DashboardLayout/DashboardLayout';
import { ErrorPage } from '@/app/error-page';
import { RouteObject } from 'react-router-dom';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [{ path: '/dashboard', element: <h1>Dashboard</h1> }],
    errorElement: <ErrorPage />,
  },
];
