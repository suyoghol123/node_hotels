const express = require('express')
const app = express()
const db = require('./db')

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const PORT = process.env.PORT || 3000;

//Server js file
app.get('/', (req, res) => {
  res.send('Hello World')
});


//import the router file
const personRoutes = require('./routes/personRoutes');

const menuRoutes = require('./routes/menuRoutes');

//use the routers
app.use('/person', personRoutes);

app.use('/menuItem',menuRoutes);


app.listen(3000, ()=> {
  console.log('listening on port 3000')
});