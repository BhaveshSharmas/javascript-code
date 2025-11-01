const express = require("express")
const mysql = require("mysql2/promise");
const app = express();

app.use(express.json());

// Create a connection pool (better for multiple requests)
const connection = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",          // your MySQL username
  password: "10081008",          // your MySQL password (set it if you have one)
  database: "todo"
});

// app.post("/send",function(req,res){
//     const snd = req.body.send;

//  // Insert the message into MySQL
//   const [resultt] = connection.query(
//     "INSERT INTO todos (data) VALUES (?)",
//     [snd],
//     (err, results) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ msg: "Database error" });
//       }
//       console.log(resultt)
//       res.json({
//         msg: "success",
//         insertedId: results.insertId
//       });
//     }
//   );
//   console.log(resultt)
// });

app.post("/send", async function(req, res) {
  try {
    const snd = req.body.send;

    const [result] = await connection.query(
      "INSERT INTO todos (data) VALUES (?)",
      [snd]
    );

    console.log(result); // result is the info object
    res.json({
      msg: "success",
      insertedId: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Database error" });
  }
});


app.get("/todos",async function(req,res){
    const [result, fields] = await connection.query('SELECT * FROM todos');
    console.log(result); // rows from the query
    console.log(fields);
    // connection.query("SELECT * FROM todos",function(error,results){
    //     if(error){
    //         console.error(error);
    //         return res.status(500).json({ msg: "Database error", error: error });
    //     }
    //     console.log(results);
    //     res.json({
    //         todos: results
    //     })
    // })
    res.send("check check");
})

app.listen(3000);