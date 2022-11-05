const server = require("./server");
const knex = require("../db/knex");
const PORT = process.env.PORT || 8080;
const app = server();

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
