import { UserRole } from "../models/users";

export interface IJWTPayload {
  id: number;
  name: string;
  role: UserRole;
}
