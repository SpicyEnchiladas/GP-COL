import path from 'path';
require('dotenv').config(); 
require('./src/db/migrations')

export = {
	development: {
        client: 'pg',
        connection: 
		// process.env.DB_LOCAL_URL,
		{
            host: "127.0.0.1",
            port: "5432",
            database: "cost_of_living",
            user: "kamil",
            password: "buyukbalik"
        },
        // searchPath: 'public',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			// tableName: 'knex_migrations',
			directory: path.resolve("./src/db/migrations"),
            extension: 'ts'
		},
		seeds: {
			directory: path.join(__dirname, "./src/db/seeds")
		},	
	},
	production: {
		client: "pg",
		connection: process.env.DATABASE_URL,
		// searchPath: "public",
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			// tableName: "knex_migrations",
			directory: path.resolve("./src/db/migrations"),
            extension: 'ts'
		},
		seeds: {
			directory: path.join(__dirname, "./src/db/seeds")
        }
	} 
} as { [key: string]: Object }