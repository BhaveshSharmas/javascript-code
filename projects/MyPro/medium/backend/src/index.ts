import { Hono } from 'hono'
import { env } from 'hono/adapter'

// import { PrismaClient } from '@prisma/client/edge'
// import { withAccelerate } from '@prisma/extension-accelerate'
// import { jwt, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: String;
    JWT_SECRET: String;
  }
}>()

app.use('*', cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


// const middleware = async (c, next) => {
//   const header = c.req.header("authorization") || "";
//   const token = header.split(" ")[1];

//   const response = await verify(token, c.env.JWT_SECRET);

//   if (response.id) {
//     await next()
//   } else {
//     c.status(403)
//     return c.json({ error: "unauthoeized" });
//   }
// }

export default app
