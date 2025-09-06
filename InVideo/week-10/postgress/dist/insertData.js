import { Client } from 'pg';
async function insertData(username, email, password) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    });
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log(res);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.end();
    }
}
insertData('sharma', 'sharma@gmail.com', '12345');
//# sourceMappingURL=insertData.js.map