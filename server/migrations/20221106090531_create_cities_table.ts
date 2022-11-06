import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable("cities", (table) => {
		table.increments("id").primary().notNullable();
		table.string("city_name").notNullable();
		table.decimal("cost_of_living", 10,2).notNullable();
		table.decimal("rent", 10, 2).notNullable();
		table.decimal("total_cost_of_living", 10, 2).notNullable();
		table.decimal("groceries", 10, 2).notNullable();
	});
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable("cities")
}

