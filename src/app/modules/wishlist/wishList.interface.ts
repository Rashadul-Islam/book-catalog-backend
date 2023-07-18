import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IBook } from '../book/book.interface';

export type IWishList = {
  book: Types.ObjectId | IBook;
  user: Types.ObjectId | IUser;
};

export type WishListModel = Model<IWishList, Record<string, unknown>>;
