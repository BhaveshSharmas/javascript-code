import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@bhasha/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: String;
        JWT_SECRET: String;
    }
    Variables: {
        userid: String
    }
}>();


blogRouter.use(async (c, next) => {
  const dataa = c.req.header("authorization") || "";
  const user = await verify(dataa, c.env.JWT_SECRET);

  if (user) {
    c.set("userid", user.id);
    return next();
  } else {
    c.status(403);
    return c.text("you are not loggedin");
  }
});

//this is for create a new blog post
blogRouter.post("/create", async (c) => {

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
            message: "inputs not correct"
        })
    }

    const authorId = c.get("userid");


    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId //this should be number(int)
            }
        })

        return c.json({
            id: blog.id
        })
    } catch (e) {
        console.log("hello"+e);
        c.status(411);
        return c.text("invalid")
    }
})

//this is for find a particular post
blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: String(id)
            },
            select:{
                id:true,
                content:true,
                title:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })

        return c.json({
            blogs: blog?[blog]:[]
        })
    } catch (e) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        })
    }
})

//this is for update a post
blogRouter.put("/update", async (c) => {

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    const authorId = c.get("userid");

    if (!success) {
        c.status(411);
        return c.json({
            message: "inputs not correct"
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })

        return c.json({
            id: blog.id
        })

    } catch (e) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        })
    }
})

//this is to get all blog posts
blogRouter.get("/bulk/", async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            author:{
                select:{
                    name: true
                }
            }
        }
    });
    console.log("Blogs fetched: ", blogs);


    return c.json({
        blogs
    });
})