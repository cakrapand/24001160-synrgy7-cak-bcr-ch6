export interface ICar {
  name: string;
  price: string;
  photoUrl?: string;
  isAvailable: boolean;
  isDeleted?: boolean;
  startRent: string;
  finishRent: string;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}
