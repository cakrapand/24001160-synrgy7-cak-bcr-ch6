import { IUser } from "../interfaces/users.interface";
import {
  deleteUserById,
  getAllUsers,
  getUserByEmail,
  getUserById,
  insertUser,
  updateUserById,
} from "../repositories/users.repository";

export const createUser = async (car: IUser) => {
  return await insertUser(car);
};

export const getUsers = async () => {
  return await getAllUsers();
};

export const getById = async (id: number) => {
  return await getUserById(id);
};

export const getByEmail = async (email: string) => {
  return await getUserByEmail(email);
};

export const updateUser = async (id: number, user: IUser) => {
  return await updateUserById(id, user);
};

export const deleteUser = async (id: number) => {
  return await deleteUserById(id);
};
