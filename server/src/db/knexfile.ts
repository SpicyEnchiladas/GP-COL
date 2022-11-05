import path from 'path';

export = {
	development: {
        client: 'pg',
        connection: {
            host: "localhost",
            port: "5432",
            database: "cost_of_living",
            user: "postgres",
            password: "helloworld"
        },
        // searchPath: 'public',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			// tableName: 'knex_migrations',
			directory: path.resolve("./migrations"),
            extension: 'ts'
		},
		seeds: {
			directory: path.join(__dirname, "/seeds")
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
			directory: path.resolve("./migrations"),
            extension: 'ts'
		},
		seeds: {
			directory: path.join(__dirname, "/seeds")
        }
	} 
} as { [key: string]: Object }