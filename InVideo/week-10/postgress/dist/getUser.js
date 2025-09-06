import { Client } from 'pg';
async function getUser(email) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_Z8Xma3sVfrvH@ep-silent-heart-adh3wrat-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    });
    try {
        await client.connect();
        const insertQuery = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(insertQuery, values);
        if (result.rows.length > 0) {
            console.log(result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user");
            return null;
        }
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await client.end();
    }
}
getUser('dev@gmail.com');
//# sourceMappingURL=getUser.js.map