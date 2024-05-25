import { ICar } from "../interfaces/cars.interface";
import {
  deleteCarById,
  getAllCars,
  getCarById,
  getCarsAvailable,
  insertCar,
  updateCarById,
} from "../repositories/cars.repository";

export const createCar = async (car: ICar) => {
  return await insertCar(car);
};

export const getCars = async () => {
  return await getAllCars();
};

export const getCar = async (id: number) => {
  return await getCarById(id);
};

export const getAvailable = async () => {
  return await getCarsAvailable();
};

export const updateCar = async (id: number, car: ICar) => {
  return await updateCarById(id, car);
};

export const deleteCar = async (id: number) => {
  return await deleteCarById(id);
};
