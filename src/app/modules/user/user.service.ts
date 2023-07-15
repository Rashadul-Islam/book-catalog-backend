/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPaginationOptions } from './../../../interfaces/pagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IUser, IUserFilters } from './user.interface';
import { userSearchableFields } from './user.constant';
import { User } from './user.model';

const getAllUser = async (
  filters: IUserFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IUser[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await User.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await User.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const isExist = await User.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  if (isExist?.role === 'buyer' && payload?.income) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Buyer income can not update !');
  }

  if (isExist?.role === 'seller' && payload?.budget) {
    throw new ApiError(httpStatus.NOT_FOUND, 'seller budget can not update !');
  }

  const { name, ...facultyData } = payload;

  const updatedStudentData: Partial<IUser> = { ...facultyData };

  // dynamically handling
  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach(key => {
      const nameKey = `name.${key}` as keyof Partial<IUser>;
      (updatedStudentData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await User.findByIdAndUpdate(id, updatedStudentData, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const myProfile = async (id: string): Promise<Partial<IUser> | null> => {
  const result = await User.findById(id, {
    name: 1,
    phoneNumber: 1,
    address: 1,
  });
  return result;
};

const updateMyProfile = async (
  id: string,
  role: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  if (payload.role && payload.role !== role) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'Role can not update !');
  }

  const isExist = await User.findById(id);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
  }

  if (isExist?.role === 'buyer' && payload?.income) {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      'Buyer income can not update !'
    );
  }

  if (isExist?.role === 'seller' && payload?.budget) {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      'seller budget can not update !'
    );
  }

  const { name, ...userData } = payload;

  const updatedUserData: Partial<IUser> = { ...userData };

  // dynamically handling
  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach(key => {
      const nameKey = `name.${key}` as keyof Partial<IUser>;
      (updatedUserData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  });
  return result;
};

export const UserService = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  myProfile,
  updateMyProfile,
};
