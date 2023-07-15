/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
import { Model } from 'mongoose';

export type IUser = {
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, 'password' | 'email'> & { _id: string }>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

export type IUserFilters = {
  searchTerm?: string;
  email?: string;
};
