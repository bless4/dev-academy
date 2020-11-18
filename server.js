const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const app = express();



/*
const connectionURL = 'mongodb://127.0.0.1:27017/devs';
//const databaseName = 'config';

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error, client) => {
    if(error) {
        return console.log('Unable to connet to DB')
    }
    console.log('Connected successfully!!!')
})
*/
var url = "mongodb://localhost:27017/devs-db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
var User = mongoose.model('User', UserSchema);
app.get('/create-user', function(res, req, next){
 var user = new User();
 user.name ="Arash";
 user.age=23;
 res.json(user);
});


app.get('/', function(req, res, next){
    res.json("wecome to my page");
})



app.listen(9000, function(err){
    if (err){
        console.log(err);

    }else{
        console.log("app running at port 9000");
    }
});