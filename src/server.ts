// require("ts-node");
require('dotenv').config();
var cors = require('cors');
import express from "express";
import  knex  from "./knex";

function startServer() {
	const app = express();

	console.log(process.env.DATABASE_URL);

	app.use(express.json());
	app.use(cors());
	// app.use("/", express.static("Gardo Caves"));

	app.get("/", (req, res) => {
		console.log("@server");
	
		res.status(200).send(process.env.DATABASE_URL);
	});

	app.get("/test", (req, res) => {
		console.log("@server-test");
		res.status(200).send("HELLO WORLD");
	});

	// app.get("/api/selectCity", async (req, res) => {
	// 	// res.status(200).send();
	// 	console.log("🌏",knex);
	// 	res.status(200).send(knex);
	// 	try {
	// 	} catch (err) {}
	// });



	app.get("/api/selectCity", async (req, res) => {
		try {
			const cities = await knex("cost_of_living")
				.select({
					id: "id",
					city_name: "city_name",
					total_cost_of_living: "total_cost_of_living",
				})
				.from("cities");

			res.status(200).send(cities);
		} catch (err) {
			res.status(404).send("No city found");
		}
	});

	return app;
}

export default startServer;
