const express = require("express")
const User = require('./Models/user')
require('dotenv').config({path : "./config/.env"})
require('./database')

const app = express();
const port = 8000;

app.use(express.json())


app.get("/", (req, res) => {
    User.find ()
    .then(data => {
        res.status (200).send(data);
    })
    .catch(err=> {
        res.status(404).send("operation failed ! ")
    }) 
  });
app.post("/", (req, res) => {
    User.create (req.body)
    .then(data => {
        res.status (201).send(data);
    })
    .catch(err=> {
        res.status(400).send("operation failed ! ")
        console.log(err);
    })   
});
app.put("/", (req, res) => {
    User.findByIdAndUpdate (req.body.userId, {age : 25}, { new: true })
    .then(data => {
        res.status (200).send(data);
    })
    .catch(err=> {
        res.status(404).send("operation failed, user not found ! ")
    }) 
    
});
app.delete("/", (req, res) => {
    User.findByIdAndDelete (req.body.userId, { new: true })
    .then(data => {
        res.status (200).send(data);
    })
    .catch(err=> {
        res.status(404).send("operation failed, user not found  ! ")
    }) 
    
});




















app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
