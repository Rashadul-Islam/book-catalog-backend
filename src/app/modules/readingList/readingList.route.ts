import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ReadingListValidation } from './readingList.validation';
import { ReadingListController } from './readingList.controller';

const router = express.Router();

router.post(
  '/create-wishlist',
  validateRequest(ReadingListValidation.createReadingListZodSchema),
  auth(),
  ReadingListController.createReadingList
);
router.get('/', auth(), ReadingListController.getAllReadingList);

export const ReadingListRoutes = router;
