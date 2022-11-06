// const server = require("./server");
// import knex from "knex";
import server from "./server";
import knex from "./knex";
const PORT = process.env.PORT || 8080;
const app = server();

// console.log(knex);

(async () => {
	try {

		await knex.migrate.latest();
		await knex.seed.run();
		app.listen(PORT, () => {
			console.log(
				`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`
			);
		});
	} catch (err) {
		console.log(err);
	}
})();

