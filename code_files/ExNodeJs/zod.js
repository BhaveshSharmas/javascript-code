const  express = require("express");
const app = express();
const z = require("zod")

const schema = z.array(z.number());

app.use(express.json())
app.post("/",function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "input invalid"
        })
    }else{
        res.send({
            response
        })
    }
    res.send({
        response
    })
});
app.use(express.json())
app.get("/",function(req,res){
    const kn = parseInt(req.body.kidneys);
    console.log(kn);
    
    res.json({
       msg: kn
    })
})


app.listen(3000)