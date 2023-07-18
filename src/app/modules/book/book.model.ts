import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    comments: {
      type: [String],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>('book', BookSchema);
