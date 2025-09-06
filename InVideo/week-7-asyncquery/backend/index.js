const express = require('express')
const app = express();

const cors = require('cors')
app.use(cors())

app.get("/",function(req,res){
    res.json({
        network: Math.floor(Math.random()*10),
        jobs: Math.floor(Math.random()*10),
        message: Math.floor(Math.random()*10),
        notification: Math.floor(Math.random()*10)
    })
})

app.listen(3000)