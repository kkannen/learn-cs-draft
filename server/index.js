
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kkannen:learncs1@ds259250.mlab.com:59250/learn-cs");

app.listen(3001, (err) => {
if (err) {console.log('Error', err);}
console.log('server running');
});