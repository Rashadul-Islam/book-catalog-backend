import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IWishList } from './readingList.interface';
import { WishListService } from './wishList.service';

const createWishList = catchAsync(async (req: Request, res: Response) => {
  const { ...book } = req.body;
  const result = await WishListService.createWishList(book);

  sendResponse<IWishList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Added to wishList successfully',
    data: result,
  });
});

const getAllWishList = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await WishListService.getAllWishList(paginationOptions);

  sendResponse<IWishList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const WishListController = {
  createWishList,
  getAllWishList,
};
