import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get(
  '/my-profile',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  UserController.myProfile
);

router.patch(
  '/my-profile',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  UserController.updateMyProfile
);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.updateUser
);

export const UserRoutes = router;
