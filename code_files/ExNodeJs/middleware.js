const express = require('express')
const app = express();
//this is using MIDDLEWARE in express and node
function usernameCheck(req,res,next){
    const username = req.headers.username;
    const pass = req.headers.pass;

    if(username != "bhavesh" || pass != "pass"){
        res.status(403).json({
            msg: "wrong Inputs from name"
        })
    }else {
        next();
    }
}

function kidneyCheck(req,res,next){
    const kidneyId = req.query.kid;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "wrong Inputs from id"
        })
    }else {
        next();
    }
}

app.get("/",usernameCheck,kidneyCheck,function(req,res,next){
    res.send("Your are OKAY")
})

app.listen(3000)