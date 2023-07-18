import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IWishList } from './readingList.interface';
import { WishList } from './readingList.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createWishList = async (
  payload: IWishList
): Promise<IWishList | null> => {
  const check = await WishList.findOne({
    book: payload.book,
    user: payload.user,
  });
  if (check) {
    throw new ApiError(httpStatus.OK, 'Already added to wishlist');
  }
  const result = await WishList.create(payload);
  return result;
};

const getAllWishList = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IWishList[]>> => {
  // Extract searchTerm to implement search query
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  // Dynamic  Sort needs  field to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await WishList.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await WishList.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const WishListService = {
  createWishList,
  getAllWishList,
};
