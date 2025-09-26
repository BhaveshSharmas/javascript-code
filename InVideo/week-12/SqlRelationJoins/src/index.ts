import { Client } from 'pg';

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function createTable() {
    await client.connect();
    const result = await client.query(`
    CREATE TABLE car(
	id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) UNIQUE NOT NULL
    );
`)
console.log(result);

}

createTable();