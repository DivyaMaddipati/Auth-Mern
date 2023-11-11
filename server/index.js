const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UsersModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/auth-mern")

app.post('/register', (req,res) => {
    UsersModel.create(req.body)
    .then(users => {
        res.json(users);
        console.log(users)
    })
    .catch(err => res.json(err))
})

app.post("/login", (req,res) => {
    const {email, password} = req.body;

    if(email != "" && password != ""){

    UsersModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record exist")
        }
    })

    }
    else{
        res.json("enter valid data")
    }

})

app.listen(3001, () => {
    console.log("server is running")
})