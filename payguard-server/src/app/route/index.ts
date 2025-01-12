import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { DocumentRoutes } from '../modules/document/document.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/documents',
    route: DocumentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
