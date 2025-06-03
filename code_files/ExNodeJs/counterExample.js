const bodyParser = require("body-parser");
const express = require("express");
const port = 2000;
const app = express();

let numberOfRuns = 0;

function counter(req,res,next){
    numberOfRuns ++;
    console.log(numberOfRuns);
    
    next();
}

app.use(counter)

app.get("/about",function(req,res){
    res.json({
        name:"Bhavesh",
        age:21
    })
})

app.use(bodyParser.json())
app.post("/convo",function(req,res){
    console.log(req.body);
    
    // console.log("Authorization = "+req.headers["authorization"]);
    
    res.json({
        msg: "2+2=4"
    })
})

app.get('/',function(req,res){
    setTimeout(function(){
    res.send("Hello World!")
    },2000)
    
})

app.listen(port)