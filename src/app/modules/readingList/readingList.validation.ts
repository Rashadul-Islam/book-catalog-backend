import { z } from 'zod';

const createReadingListZodSchema = z.object({
  body: z.object({
    book: z.string({
      required_error: 'Book is required',
    }),
    user: z.string({
      required_error: 'User is required',
    }),
    status: z.string().optional(),
  }),
});

const updateReadingListZodSchema = z.object({
  body: z.object({
    book: z.string({
      required_error: 'Book is required',
    }),
    user: z.string({
      required_error: 'User is required',
    }),
    status: z.string({
      required_error: 'Status is required',
    }),
  }),
});

export const ReadingListValidation = {
  createReadingListZodSchema,
  updateReadingListZodSchema,
};
