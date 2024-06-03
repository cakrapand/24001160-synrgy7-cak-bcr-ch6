import { Router } from "express";
import { create } from "../controllers/users.controller";
import { authorize } from "../middleware/authorize";

/**
 * @swagger
 * /api/users:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *      - users
 *     responses:
 *       201:
 *         description: Users with role admin created
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
 *                              example: admin@gmail.com
 *                          password:
 *                              type: string
 *                              example: $2a$10$3dom7jXyeqqDPDl3c8ZufOPc.M69b6KM8gnqQlvZmOjMe2rjqQ2CG
 *                          name:
 *                              type: string
 *                              example: admin
 *                          role:
 *                              type: string
 *                              example: admin
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 */

export const usersRouter = Router();

usersRouter.post("/users", authorize, create);
