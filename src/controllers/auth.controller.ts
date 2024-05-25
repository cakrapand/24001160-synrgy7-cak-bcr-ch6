import { Request, Response } from "express";
import { getByEmail } from "../services/users.service";
import { checkPassword } from "../utils/bcrypt";
import { sign } from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Invalid Input" });

    const user = await getByEmail(email);

    if (!user || !(await checkPassword(password, user.password)))
      return res.status(401).json({ message: "Wrong email or password" });

    const token = sign({ id: user.id, email: user.email }, "THIS SECRET TOKEN SHOULDNT BE EXPOSE");

    return res.status(200).json({ message: "OK", data: { id: user.id, email: user.email, token } });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
