import { Request, Response } from "express";
import { createUser, getByEmail } from "../services/users.service";
import { checkPassword, encryptPassword } from "../utils/bcrypt";
import { sign } from "jsonwebtoken";
import { UserRole } from "../models/users";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Invalid Input" });

    const user = await getByEmail(email);

    if (!user || !(await checkPassword(password, user.password)))
      return res.status(401).json({ message: "Wrong email or password" });

    if (user.role === UserRole.Member)
      return res.status(401).json({ message: "Member Unauthorized" });

    const token = sign(
      { id: user.id, email: user.email, role: user.role },
      "THIS SECRET SIGNATURE SHOULDNT BE EXPOSE"
    );

    return res.status(200).json({ message: "OK", data: { id: user.id, email: user.email, token } });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) return res.status(400).json({ message: "Invalid Input" });

    if (await getByEmail(email)) return res.status(409).json({ message: "Email used" });

    const encryptedPassword = await encryptPassword(password);
    const newUser = await createUser({
      email,
      password: encryptedPassword,
      name,
      role: UserRole.Member,
    });
    return res.status(201).json({ message: "User created", data: newUser });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const whoami = async (req: Request, res: Response) => {
  try {
    return res.status(201).json({ message: "OK", data: req.user });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
