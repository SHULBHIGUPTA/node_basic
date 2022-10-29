// const express = require('express');
// require('./config');
// const Product = require('./product');

// const app = express();

// app.use(express.json());

// app.post("/create",async (req, resp) => {
//     console.log(req.body);
//     let data = new Product(req.body);
//     let result = await data.save();
//     resp.send(result)
// })

// app.listen(5000);

const express = require('express');
const con = require("./configmysql");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    con.query("select * from users", (err, result) => {
        if(err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
});

app.post("/", (req, resp) => {
    const data = req.body;
    con.query('INsert INTO users SET ?', data, (error, result, fields) => {
    if(error) throw error;
    else resp.send(result);
    })
})

app.put("/:id", (req, resp) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    con.query("UPDATE users SET name = ?, password =?, user_type = ? where id = ?", data,(err, result, fields) => {
        if(err) throw err;
        else resp.send(result);
    });
})

app.delete("/:id", (req, resp) => {
    con.query("DELETE FROM users WHERE id =", + req.params.id, (err, result) => {
        if(err) throw err;
        else resp.send(result);
    });
})

app.listen(5000)