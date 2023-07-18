import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IBook } from '../book/book.interface';

export type IReadingList = {
  book: Types.ObjectId | IBook;
  user: Types.ObjectId | IUser;
  status: string;
};

export type ReadingListModel = Model<IReadingList, Record<string, unknown>>;
