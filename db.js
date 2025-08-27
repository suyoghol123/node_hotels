const mongoose = require('mongoose');
//define the monogdb connection URL
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL;
const mongoURL = process.env.MONGODB_URL_local;

//setup mongodb connection
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db =mongoose.connection;

db.on('connected',() =>{
  console.log('connected to mongoDB server');
});

db.on('error',(err) =>{
  console.error('MongoDB connection error:',err);
});

db.on('disconnected',() =>{
  console.log('MongoDB Disconnected');
});

//export the database connection
module.exports =db;