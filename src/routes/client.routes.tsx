import { ErrorPage } from '@/app/error-page';
import { ContactPage } from '@/app/pages/ContactPage/ContactPage';
import { HomePage } from '@/app/pages/HomePage/HomePage';
import { ClientLayout } from '@/shared/components/templates/ClientLayout/ClientLayout';
import { RouteObject } from 'react-router-dom';

export const clientRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];
