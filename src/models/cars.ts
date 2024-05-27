import { Model, ModelObject } from "objection";

export class CarsModel extends Model {
  id!: number;
  name!: string;
  price!: string;
  photoUrl!: string;
  isAvailable!: boolean;
  startRent!: string;
  finishRent!: string;
  isDeleted!: boolean;
  createdBy!: number;
  updatedBy!: number;
  deletedBy!: number;
  createdAt!: string;
  updatedAt!: string;

  static get tableName() {
    return "cars";
  }
}

export type Cars = ModelObject<CarsModel>;
