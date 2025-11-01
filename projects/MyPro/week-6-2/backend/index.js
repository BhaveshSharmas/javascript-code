const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())

app.get("/:id",function(req,res){
    const id = req.params.id;

    if(id == 1){
       res.json({
        todos:
            {title: "This is id 1",
        description: "Thisis my todo Description"}
        
        
    }) 
    }else if(id == 2){
        res.json({
        todos:
            {title: "This is id 2",
        description: "Thisis my todo Description"}
        
        
    }) 
    }else{
        res.json({
        todos:
            {title: "This is id 3",
        description: "Thisis my todo Description"}
        
        
    }) 
    }
    
})

app.listen(3000)