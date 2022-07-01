const express = require('express');
const sql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8000

app.use(express.json);
app.use(cors());

const db = sql.createConnection({
    user: 'root',
    host:'localhost',
    password:'root',
    database:'joy_blog'
});

app.post('/register', (req, res)=>{
    const username = req.body.usernameReg
    const password = req.body.passwordReg
    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err, result) => {
            console.log('error->', err);
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err){
                console.log({err:err})
            }
            if(result.length > 0){
                res.send(result)
            }else{
                res.send({message: "Wrong username/password !"})
            }
            
        }
    )
})

app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})