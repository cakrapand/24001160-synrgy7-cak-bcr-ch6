import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      name: "Subaru",
      price: 1000,
      photoUrl: "Photo URL",
      createdBy: 1,
      updatedBy: 1,
    },
    {
      name: "McLaren",
      price: 2000,
      photoUrl: "Photo URL",
      createdBy: 2,
      updatedBy: 2,
    },
    {
      name: "Supra",
      price: 3000,
      photoUrl: "Photo URL",
      isAvailable: false,
      createdBy: 2,
      updatedBy: 2,
    },
  ]);
}
