const express = require('express')
const app = express()
app.use(express.json())
app.post("/",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have "+kidneyLength+" kidneys")
})

app.listen(3000)