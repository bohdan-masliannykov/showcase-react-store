import { ErrorPage } from '@/app/error-page';
import { ContactPage } from '@/app/pages/ContactPage/ContactPage';
import { HomePage } from '@/app/pages/HomePage/HomePage';
import ProductPreview from '@/app/pages/Products/ProductPreview/ProductPreview';
import ProductsList from '@/app/pages/Products/ProductsList/ProductsList';
import { ClientLayout } from '@/shared/components/templates/ClientLayout/ClientLayout';
import { RouteObject } from 'react-router-dom';

export const clientRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsList /> },
      { path: '/products/:id', element: <ProductPreview /> },
      { path: '/contact', element: <ContactPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];
