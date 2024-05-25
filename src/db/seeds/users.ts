import { Knex } from "knex";
import { UserRole } from "../../models/users";
import { encryptPassword } from "../../utils/bcrypt";

export async function seed(knex: Knex): Promise<void> {
  const password = await encryptPassword("password");
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      email: "superadmin@gmail.com",
      password: password,
      name: "superadmin",
      role: UserRole.SuperAdmin,
    },
    {
      email: "admin@gmail.com",
      password: password,
      name: "admin",
      role: UserRole.Admin,
    },
    {
      email: "cakrapand@gmail.com",
      password: password,
      name: "Cakra",
      role: UserRole.Member,
    },
    {
      email: "audi@gmail.com",
      password: password,
      name: "Audi",
      role: UserRole.Member,
    },
  ]);
}
