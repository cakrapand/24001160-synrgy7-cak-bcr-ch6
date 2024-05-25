import { compare, genSalt, hash } from "bcryptjs";

export const encryptPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const checkPassword = async (password: string, encryptedPassword: string) => {
  return await compare(password, encryptedPassword);
};
