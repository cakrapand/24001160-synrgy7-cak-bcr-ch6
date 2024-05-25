import { IUser } from "../interfaces/users.interface";
import { UsersModel } from "../models/users";

export const insertUser = async (user: IUser) => {
  return await UsersModel.query().insert(user);
};

export const getUserById = async (id: number) => {
  return await UsersModel.query().findById(id).throwIfNotFound();
};

export const getUserByEmail = async (email: string) => {
  return await UsersModel.query().findOne("email", email).throwIfNotFound();
};

export const getAllUsers = async () => {
  return await UsersModel.query();
};

export const updateUserById = async (id: number, user: IUser) => {
  return await UsersModel.query().where("id", id).update(user);
};

export const deleteUserById = async (id: number) => {
  return await UsersModel.query().where("id", id).del();
};
