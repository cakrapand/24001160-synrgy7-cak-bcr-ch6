import { Request, Response } from "express";
import { createUser, getByEmail } from "../services/users.service";
import { encryptPassword } from "../utils/bcrypt";
import { UserRole } from "../models/users";

export const create = async (req: Request, res: Response) => {
  try {
    if (req.user?.role !== UserRole.SuperAdmin)
      return res.status(401).json({ message: "Unauthorized" });

    const { email, password, name } = req.body;
    if (!email || !password || !name) return res.status(400).json({ message: "Invalid Input" });

    if (await getByEmail(email)) return res.status(409).json({ message: "Email used" });

    const encryptedPassword = await encryptPassword(password);
    const newUser = await createUser({
      email,
      password: encryptedPassword,
      name,
      role: UserRole.Admin,
    });
    return res.status(201).json({ message: "User created", data: newUser });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
