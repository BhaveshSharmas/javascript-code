import { Hono } from 'hono';

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from 'hono/jwt'
import { Bindings } from 'hono/types';
import { signinInput, signupInput } from '@bhasha/medium-common';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: String;
        JWT_SECRET: String
    }
}>();

//signupRoute
userRouter.post("/signup", async (c) => {

    const body = await c.req.json()
    const { success } = signupInput.safeParse(body);

    console.log(success);


    if (!success) {
        c.status(411)
        return c.json({
            message: "inputs not correct"
        })
    }

    //this is to generate the prisma client
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            },
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ token })
    } catch (e) {
        console.log(e);
        c.status(411)
        return c.text("invalid")
    }

})

//signinRoute
userRouter.post("/signin", async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);

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
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        })
        if (!user) {
            c.status(403) //unauthorized
            return c.json({
                message: "unauthorized"
            })
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET)
        return c.json({ token: jwt });
    } catch (e) {
        console.log(e);
        c.status(411) //error
        return c.text("invalid")
    }
})

userRouter.get("/items",(c)=>{
    console.log("itemsitesmitemstmsentnse");
    return c.text("123")
})