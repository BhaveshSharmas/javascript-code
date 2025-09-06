import pg = require("pg");

const client = new pg.Client({

connectionString:'postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

})

async function createUserTable(){

await client.connect();

const result = await client.query(`

CREATE TABLE users (

id SERIAL PRIMARY KEY,

username VARCHAR(50) UNIQUE NOT NULL,

email VARCHAR(50) UNIQUE NOT NULL,

password VARCHAR(50) NOT NULL,

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);

`)

console.log(result)

}
// await client.query(insertquery) //not recommended
// await client.query(insertquery,values)// recommended

createUserTable();

CREATE TABLE address (

id SERIAL PRIMARY KEY,

user_id INTEGER NOT NULL,

city VARCHAR(50) NOT NULL,

country VARCHAR(50) NOT NULL,

pincode VARCHAR(50) NOT NULL,

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

FORIEGN KEY (user_id) REFERENCES URLSearchParams(id) ON DELETE CASCADE

);