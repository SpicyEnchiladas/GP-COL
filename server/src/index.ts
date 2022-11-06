// const server = require("./server");
import server from "./server";
// import knex from "./db/knex";
const PORT = process.env.PORT || 8080;
const app = server();

// console.log(knex);

(async () => {
	try {
		app.listen(PORT, () => {
			console.log(
				`Is your server running? Well, you better go catch it, then! http://localhost:${PORT}`
			);
		});
	} catch (err) {
		console.log(err);
	}
})();

