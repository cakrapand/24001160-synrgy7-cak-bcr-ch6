import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.increments("id").primary;
    table.string("name").notNullable;
    table.integer("price").notNullable;
    table.string("photoUrl").notNullable;
    table.boolean("isAvailable").defaultTo(true).notNullable;
    table.boolean("isDeleted").defaultTo(false).notNullable;
    table.timestamp("startRent").defaultTo(knex.fn.now());
    table.timestamp("finishRent").defaultTo(knex.fn.now());
    table.integer("createdBy").unsigned();
    table.foreign("createdBy").references("users.id");
    table.integer("updatedBy").unsigned();
    table.foreign("updatedBy").references("users.id");
    table.integer("deletedBy").unsigned().nullable;
    table.foreign("deletedBy").references("users.id");
    table.timestamps({ defaultToNow: true, useCamelCase: true });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}
