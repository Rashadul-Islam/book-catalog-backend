import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { WishListValidation } from './wishList.validation';
import { WishListController } from './wishList.controller';

const router = express.Router();

router.post(
  '/create-wishlist',
  validateRequest(WishListValidation.createWishListZodSchema),
  auth(),
  WishListController.createWishList
);
router.get('/', auth(), WishListController.getAllWishList);

export const WishListRoutes = router;
