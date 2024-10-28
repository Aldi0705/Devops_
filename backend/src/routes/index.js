import { Router } from 'express';
import homeRoute from './home.route.js';
import authRoute from './auth.route.js';
import productRoute from './product.route.js';
import commentRoute from './comment.route.js';
import cartRoute from './cart.route.js';

const router = Router();
const routes = [
  {
    path: '/',
    route: homeRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/comment',
    route: commentRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
];

routes.forEach(({ path, route }) => router.use(path, route));

export default router;
