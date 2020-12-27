const express = require('express');
const bodyParser = require('body-parser');
const React = require ('react');
const ReactDom = require('react-dom');
const app = express();
const PORT = 5000;
const http = require('http');
//json 
app.unsubscribe(express.json());
app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/../src/Components/'));

//athenticate admin
app.post('/',(reqn,res)=>{
    req.session.username = req.params.username ;
    req.session.password = req.params.password ;
    if (error)
    throw error ;
    else return 'admin'=== username && 'admin'=== password;

})
//data grabbing
app.post('/',function(req,res){
    res.send = req.body.something
})
app.get('/',function(req,res){
    res.send('something');
})
app.listen(PORT,()=>{
    console.log(`listen on${PORT}`);
})