const express = require("express");
// import db from "../db/knex.ts";
function startServer () {
	const app = express();

	app.use(express.json());
	app.use("/", express.static("Gardo Caves"));

	// app.get("/test", (req, res) => {
	// 	res.status(200).send("HELLO WORLD");
	// });

	// app.get("/api/selectCity", async (req, res) => {
	// 	try {
	// 		const cities = await db("cost_of_living")
	// 			.select({
	// 				id: "id",
	// 				city_name: "city_name",
	// 				total_cost_of_living: "total_cost_of_living",
	// 			})
	// 			.from("cities");

	// 		res.status(200).send(cities);
	// 	} catch (err) {
	// 		console.log("No city found");
	// 	}
	// });

	return app;
}

module.exports = startServer;
