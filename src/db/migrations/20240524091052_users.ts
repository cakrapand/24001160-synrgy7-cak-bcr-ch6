import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.increments("id").primary;
    table.string("email").unique;
    table.string("password").notNullable;
    table.string("name").notNullable;
    table.enu("role", ["superadmin", "admin", "member"]).notNullable;
    table.timestamps({ defaultToNow: true, useCamelCase: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
