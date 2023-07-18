import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IReadingList } from './readingList.interface';
import { ReadingList } from './readingList.model';

const createReadingList = async (
  payload: IReadingList
): Promise<IReadingList | null> => {
  const check = await ReadingList.findOne({
    book: payload.book,
    user: payload.user,
  });
  if (check) {
    throw new ApiError(httpStatus.OK, 'Already added to Readinglist');
  }
  const result = await ReadingList.create(payload);
  return result;
};

const getAllReadingList = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IReadingList[]>> => {
  // Extract searchTerm to implement search query
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Dynamic  Sort needs  field to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await ReadingList.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await ReadingList.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const ReadingListService = {
  createReadingList,
  getAllReadingList,
};
