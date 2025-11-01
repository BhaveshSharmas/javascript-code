import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

async function insertData(username:string,password:number,user_id:number) {
    await client.connect();
    const result = await client.query(`
    INSERT INTO car(username,password,user_id) VALUES ($1,$2,$3)`,[username,password,user_id]);
    console.log(result);

}

async function show() {
    await client.connect();
    const result = await client.query(`
    SELECT * FROM car`);
    console.log(result);

}

show()

// insertData(";Drop table cqar;",1008,32);


    // INSERT INTO car(username,password,user_id) VALUES ('${username}','${password}','${user_id}');