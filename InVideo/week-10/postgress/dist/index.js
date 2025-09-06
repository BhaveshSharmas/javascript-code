import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const pg = __require("pg");
const client = new pg.Client({
    connectionString: 'postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
async function createUserTable() {
    await client.connect();
    const result = await client.query(`

CREATE TABLE users (

id SERIAL PRIMARY KEY,

username VARCHAR(50) UNIQUE NOT NULL,

email VARCHAR(50) UNIQUE NOT NULL,

password VARCHAR(50) NOT NULL,

created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);

`);
    console.log(result);
}
// await client.query(insertquery) //not recommended
// await client.query(insertquery,values)// recommended
createUserTable();
//# sourceMappingURL=index.js.map