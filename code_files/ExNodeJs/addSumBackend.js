const express = require("express");
const cors = require("cors");

const app = express();
let finalIntrest = 0;
app.use(cors())
app.get("/sum",function(req,res){
    const num1 = Number(req.query.a);
    const num2 = Number(req.query.b);

    const sum = num1 + num2;

    res.send(sum);
})

app.get("/intrest",function(req,res){
    const principal = Number(req.query.pa);
    const roi = Number(req.query.ri);
    const time = Number(req.query.yr);

    if(time < 2){
        finalIntrest = (principal*roi)/100;
    }else {
        finalIntrest = ((principal*roi)/100) * time;
    }
    
    res.json({
        principal: principal,
        intrest_amount: finalIntrest
    })
    
})

app.listen(3000);