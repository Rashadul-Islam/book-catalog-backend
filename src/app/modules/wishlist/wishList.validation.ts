import { z } from 'zod';

const createWishListZodSchema = z.object({
  body: z.object({
    book: z.string({
      required_error: 'Book is required',
    }),
    user: z.string({
      required_error: 'User is required',
    }),
  }),
});

export const WishListValidation = {
  createWishListZodSchema,
};
