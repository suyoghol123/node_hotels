const mongoose = require('mongoose');
//define the monogdb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

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