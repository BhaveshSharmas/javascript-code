const express = require('express');
const { todoFrame, update } = require('./type');
const { todo } = require('./db');
const app = express();
const cors = require('cors');

// import {todoFrame,update,a} from './type.js';



app.use(express.json());
app.use(cors());

app.post("/todos",async function(req,res){
    const createPayload = req.body;
    const parsePayload = todoFrame.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(401).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })

    //putinMongoDBdatabase
})

app.get("/todo",async function(req,res){
    
    const todos = await todo.find({});

    res.json({
        todos
    })
    
})

app.put("/completed",async function(req,res){
    const updatePayload = {id: req.body.id};
    const parsePayload = update.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(401).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    const item = await todo.findById(req.body.id);
    if (!item) {
        res.status(404).json({ msg: "Todo not found" });
        return;
    }

    const newstatus = !item.completed;

    await todo.updateOne({
        _id: req.body.id
    },
    {
        completed: newstatus
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000)