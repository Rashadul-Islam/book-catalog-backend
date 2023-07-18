import { Schema, model } from 'mongoose';
import { IWishList, WishListModel } from './wishList.interface';

const WishListSchema = new Schema<IWishList, WishListModel>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: 'book',
      required: true,
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

export const WishList = model<IWishList, WishListModel>(
  'wishList',
  WishListSchema
);
