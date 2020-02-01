const express = require('express')
const app = express()
const port = 3000

let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');// Import Mongoose
let mongoose = require('mongoose');// Configure bodyparser to handle post requests


app.use(bodyParser.urlencoded({
   extended: true
}));app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;
// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', apiRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
