import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IReadingList } from './readingList.interface';
import { ReadingListService } from './wishList.service';

const createReadingList = catchAsync(async (req: Request, res: Response) => {
  const { ...book } = req.body;
  const result = await ReadingListService.createReadingList(book);

  sendResponse<IReadingList>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Added to ReadingList successfully',
    data: result,
  });
});

const getAllReadingList = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ReadingListService.getAllReadingList(paginationOptions);

  sendResponse<IReadingList[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Readinglist fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const ReadingListController = {
  createReadingList,
  getAllReadingList,
};
