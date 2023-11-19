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

// Add this route after the login route
app.get('/login/:email', (req, res) => {
    const email = req.params.email;
    UsersModel.findOne({ email:email })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      })
      .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
  });
  

app.listen(3000, () => {
    console.log("server is running")
})