import { createBrowserRouter } from 'react-router-dom';
import { clientRoutes } from './client.routes';
import { dashboardRoutes } from './dashboard.routes';

export const router = createBrowserRouter([
    ...clientRoutes,
    ...dashboardRoutes
]);