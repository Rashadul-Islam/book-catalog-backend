import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ReadingListValidation } from './readingList.validation';
import { ReadingListController } from './readingList.controller';

const router = express.Router();

router.post(
  '/create-readinglist',
  validateRequest(ReadingListValidation.createReadingListZodSchema),
  auth(),
  ReadingListController.createReadingList
);
router.get('/', auth(), ReadingListController.getAllReadingList);
router.get('/', auth(), ReadingListController.updateReadingList);

export const ReadingListRoutes = router;
