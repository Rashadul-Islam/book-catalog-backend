import { Schema, model } from 'mongoose';
import { IReadingList, ReadingListModel } from './readingList.interface';

const ReadingListSchema = new Schema<IReadingList, ReadingListModel>(
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
    status: {
      type: String,
      required: true,
      default: 'reading',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const ReadingList = model<IReadingList, ReadingListModel>(
  'readingList',
  ReadingListSchema
);
