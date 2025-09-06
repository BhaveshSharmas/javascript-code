import {success, z} from 'zod';
const express = require('express')
const app = express();

const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
})

app.put("/user",function(req:any,res:any){
    const {success} = userSchema.safeParse(req.body);
    const updatebody = req.body;

    if(!success){
        return res.status(401).json({})
    }

    res.json({
        message: "Done"
    })
})

app.listen(3000)