import {z} from 'zod';
import express from 'express'
const app = express();
app.use(express.json());

app.use(express.json());

const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
})

type typeUserSchema = z.infer<typeof userSchema>


app.put("/user",function(req,res){
    const {success} = userSchema.safeParse(req.body);
    const updatebody = req.body;

    console.log(updatebody.name);
    

    if(!success){
        return res.status(401).json({})
    }

    res.json({
        message: "Done"
    })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});