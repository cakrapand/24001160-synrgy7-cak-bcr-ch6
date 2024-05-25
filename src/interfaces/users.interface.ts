import { UserRole } from "../models/users";

export interface IUser {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}
