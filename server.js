const express= require('express');
const app = express()
const port = 6500;
const User = require ('./user.js');
const Disease = require('./diease.js')
const mongoose = require('mongoose');
//mongoose connect 
mongoose.connect('mongodb://localhost/madic',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoDB connected')
});





app.use(express.json());
app.use(express.urlencoded({extended: true}))
//send req for login component
app.post('/Login',async (req,res)=>{
    console.log(req.body)
    var email =  req.body.email
    var pass = req.body.password
    var compare = ''
    await User.findOne({email : email}, (err, data) =>{
        compare = data;
    })
    console.log('this is done :', compare);
    if(email === compare.email && pass === compare.password){
        console.log('accepted data log')
        res.send({status: "successLogg", useremail: compare.email, username: compare.username});
    } else{
        console.log('wrong dude');
    }
})
//send req for signin component
app.post('/signin',(req,res)=>{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    User.create({
        username : username,
        email: email,
        password: password
    })
    console.log('seccecc save data');
})
//send req for form component
app.post('/form', (req, res)=>{
    console.log(req.body)
    Disease.create({
        symptoms: req.body.covid19
    })

})

app.listen(port,()=>console.log(`server start on ${port}`));
//this coded maded by anas 