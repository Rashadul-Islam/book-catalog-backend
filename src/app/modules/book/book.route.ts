import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
// import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidation.createBookZodSchema),
  // auth()
  BookController.createBook
);

router.post(
  '/comment/:id',
  // auth(),
  BookController.createComment
);

router.get('/', BookController.getAllBook);
router.get('/recent-books', BookController.getRecentBooks);
router.get('/:id', BookController.getSingleBook);

export const BookRoutes = router;
