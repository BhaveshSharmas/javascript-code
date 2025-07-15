const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

const mongooge = require("mongoose")
mongooge.connect("mongodb+srv://admin:ECIBC0gwp4pLvE0M@cluster0.xyrqpuu.mongodb.net/")

const User = mongooge.model('Users',{
    name: String, email: String, password: String
})



const allUsers = [
    {
        username: 'bhaveshs',
        password: '12345',
        name: 'Bhavesh Sharma'

    },
    {
        username: 'jays',
        password: '12345',
        name: 'Jai Soni'

    },
    {
        username: 'aandu',
        password: '12345',
        name: 'Anand Soni'

    },
]

function userVarif(username,password){

    let isamember = false;
    for (let i = 0; i < allUsers.length; i++) {
        if(username == allUsers[i].username && password == allUsers[i].password){
            isamember = true;
            return true;
        }
    }

    return false;


    // if(!username == 'bhaveshs' && !password == '12345'){
    //     return false;
    // }else{
    //     return true;
    // }
}
app.use(express.json())
app.post("/",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userVarif(username,password)){
        res.status(411).json({
            msg: 'this is not valid allright'
        })
    }else{
        const response = jwt.sign({ username : username },"12345")
        res.json({
            msg: "run",
            tokenn: response
        })
    }


})

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const exist = await User.findOne({email: username})
    if(exist){
        return res.status(411).send("error")
    }   

    const user = new User({
    name: username, 
    email: email, 
    password: password
    }) 
    user.save();
    
    res.send("sumbit")
    
})

// app.post("/signup", async function (req, res) {
//     const { username, email, password } = req.body;

//     try {
//         const exist = await User.findOne({ email: email }); // ✅ email not username
//         if (exist) {
//             return res.status(411).send("User already exists");
//         }

//         const user = new User({
//             name: username,
//             email: email,
//             password: password
//         });

//         await user.save(); // ✅ await save
//         res.send("submit");
//     } catch (e) {
//         console.error(e);
//         res.status(500).send("Internal Server Error");
//     }
// });

app.get("/",function(req,res){
    const token = req.headers.auth;
    const decoded = jwt.verify(token,"12345")
    const username = decoded.username;
    res.json({
        users: allUsers.filter(function(value){
            if(value.username == username){
                return false;
            }else{
                return true;
            }
        })
    })
})

app.listen(2000)
