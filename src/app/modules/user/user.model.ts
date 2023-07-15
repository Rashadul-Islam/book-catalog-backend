/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

export const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
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

//checking user existance
UserSchema.statics.isUserExist = async function (
  email: string
): Promise<(Pick<IUser, 'password' | 'email'> & { _id: string }) | null> {
  return await User.findOne({ email }, { _id: 1, password: 1, email: 1 });
};

//compare pasword
UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// hashing user password
UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

//hashing while password updating
UserSchema.pre('findOneAndUpdate', async function (this: any, next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = await bcrypt.hash(
      update.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
