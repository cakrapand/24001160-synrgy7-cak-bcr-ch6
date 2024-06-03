import { Router } from "express";
import { login, register, whoami } from "../controllers/auth.controller";
import { authorize } from "../middleware/authorize";

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *      - auth
 *     responses:
 *       200:
 *         description: User authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 *                      example: OK
 *                  data:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                              example: 1
 *                          email:
 *                              type: string
 *                              example: cakrapand@gmail.com
 *                          token:
 *                              type: string
 *                              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTY3OTU0MjR9.udmu8cQJxtuU1GsqDwfQtwzq_ZCe6e9izm6nQpWp_Nw
 *
 * /api/auth/register:
 *   post:
 *     tags:
 *      - auth
 *     responses:
 *       201:
 *         description: User with member role created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 *                      example: User created
 *                  data:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                              example: 1
 *                          email:
 *                              type: string
 *                              example: cakrapand@gmail.com
 *                          password:
 *                              type: string
 *                              example: $2a$10$3dom7jXyeqqDPDl3c8ZufOPc.M69b6KM8gnqQlvZmOjMe2rjqQ2CG
 *                          name:
 *                              type: string
 *                              example: Cakra
 *                          role:
 *                              type: string
 *                              example: Member
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *
 * /api/auth/whoami:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *      - auth
 *     responses:
 *       200:
 *         description: User info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 *                      example: OK
 *                  data:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                              example: 1
 *                          email:
 *                              type: string
 *                              example: cakrapand@gmail.com
 *                          password:
 *                              type: string
 *                              example: $2a$10$3dom7jXyeqqDPDl3c8ZufOPc.M69b6KM8gnqQlvZmOjMe2rjqQ2CG
 *                          name:
 *                              type: string
 *                              example: Cakra
 *                          role:
 *                              type: string
 *                              example: Member
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 */

export const authRouter = Router();

authRouter.post("/auth/login", login);
authRouter.post("/auth/register", register);
authRouter.get("/auth/whoami", authorize, whoami);
