import { Model, ModelObject } from "objection";

export enum UserRole {
  SuperAdmin = "superadmin",
  Admin = "admin",
  Member = "member",
}

export class UsersModel extends Model {
  id!: number;
  email!: string;
  password!: string;
  name!: string;
  role!: UserRole;
  createdAt!: string;
  updatedAt!: string;

  static get tableName() {
    return "users";
  }
}

export type Users = ModelObject<UsersModel>;
