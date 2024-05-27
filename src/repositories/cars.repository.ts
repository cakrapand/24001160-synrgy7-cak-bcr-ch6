import { ICar } from "../interfaces/cars.interface";
import { Cars, CarsModel } from "../models/cars";

export const insertCar = async (car: ICar) => {
  return await CarsModel.query().insert(car);
};

export const getCarById = async (id: number) => {
  return await CarsModel.query().findById(id).where("isDeleted", false).throwIfNotFound();
};

export const getCarsAvailable = async () => {
  return await CarsModel.query().where({ isAvailable: true, isDeleted: false }).throwIfNotFound();
};

export const getAllCars = async () => {
  return await CarsModel.query().where("isDeleted", false);
};

export const updateCarById = async (id: number, car: ICar) => {
  return await CarsModel.query().where("id", id).update(car);
};

export const deleteCarById = async (carId: number, userId: number) => {
  return await CarsModel.query().where("id", carId).update({ isDeleted: true, deletedBy: userId });
  // return await CarsModel.query().where("id", id).del();
};
