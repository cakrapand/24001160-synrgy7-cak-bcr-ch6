import { Router } from "express";
import { destroy, get, getAll, create, update, available } from "../controllers/cars.controller";
import uploadOnMemory from "../middleware/multer";
import { uploadPhoto } from "../middleware/upload-photo";
import { authorize } from "../middleware/authorize";

/**
 * @swagger
 * /api/cars:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *      - cars
 *     responses:
 *       200:
 *         description: Get All Cars
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
 *                          name:
 *                              type: string
 *                              example: Subaru
 *                          price:
 *                              type: number
 *                              example: 20000
 *                          photoUrl:
 *                              type: string
 *                              example: https://res.cloudinary.com/dkvhcraan/image/upload/v1716438308/secondCar_f12jzm.jpg
 *                          isAvailable:
 *                              type: string
 *                              example: true
 *                          isDeleted:
 *                              type: boolean
 *                              example: false
 *                          startRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          finishRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          createdBy:
 *                              type: number
 *                              example: 1
 *                          updatedBy:
 *                              type: number
 *                              example: 1
 *                          deletedBy:
 *                              type: number
 *                              example: 1
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *
 * /api/cars/available:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *      - cars
 *     responses:
 *       200:
 *         description: Get cars available
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
 *                          name:
 *                              type: string
 *                              example: Subaru
 *                          price:
 *                              type: number
 *                              example: 20000
 *                          photoUrl:
 *                              type: string
 *                              example: https://res.cloudinary.com/dkvhcraan/image/upload/v1716438308/secondCar_f12jzm.jpg
 *                          isAvailable:
 *                              type: string
 *                              example: true
 *                          isDeleted:
 *                              type: boolean
 *                              example: false
 *                          startRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          finishRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          createdBy:
 *                              type: number
 *                              example: 1
 *                          updatedBy:
 *                              type: number
 *                              example: 1
 *                          deletedBy:
 *                              type: number
 *                              example: 1
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 * /api/cars/{id}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *      - cars
 *     responses:
 *       200:
 *         description: Get cars available
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
 *                          name:
 *                              type: string
 *                              example: Subaru
 *                          price:
 *                              type: number
 *                              example: 20000
 *                          photoUrl:
 *                              type: string
 *                              example: https://res.cloudinary.com/dkvhcraan/image/upload/v1716438308/secondCar_f12jzm.jpg
 *                          isAvailable:
 *                              type: string
 *                              example: true
 *                          isDeleted:
 *                              type: boolean
 *                              example: false
 *                          startRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          finishRent:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          createdBy:
 *                              type: number
 *                              example: 1
 *                          updatedBy:
 *                              type: number
 *                              example: 1
 *                          deletedBy:
 *                              type: number
 *                              example: 1
 *                          createdAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 *                          updatedAt:
 *                              type: string
 *                              example: 2024-05-27T07:35:08.375Z
 */

export const carsRouter = Router();

carsRouter.get("/cars", authorize, getAll);
carsRouter.get("/cars/available", available);
carsRouter.get("/cars/:id", authorize, get);
carsRouter.post("/cars", authorize, uploadOnMemory.single("photo"), uploadPhoto, create);
carsRouter.put("/cars/:id", authorize, uploadOnMemory.single("photo"), uploadPhoto, update);
carsRouter.delete("/cars/:id", authorize, destroy);
