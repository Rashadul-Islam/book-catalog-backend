import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/book/book.route';
import { WishListRoutes } from '../modules/wishlist/wishList.route';
import { ReadingListRoutes } from '../modules/readingList/readingList.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishListRoutes,
  },
  {
    path: '/readinglist',
    route: ReadingListRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
