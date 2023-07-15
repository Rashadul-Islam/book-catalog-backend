import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);

router.get('/', BookController.getAllBook);
router.get('/recent-books', BookController.getRecentBooks);

export const BookRoutes = router;
