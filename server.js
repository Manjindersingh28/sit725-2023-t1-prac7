
var express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');

let http = require('http').createServer(app);
let io = require('socket.io')(http);
//const MongoClient = require('mongodb

let collection;
let Router = require('./routers/router');
// import controller from './controllers/controller';
require('./dbConnection');

var app = express();
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', Router);

const uri = "mongodb+srv://mani28au:Password28%40@clustersit725-task4.dbkylur.mongodb.net/CatManager"; //updated this line
var port = process.env.port || 3000;

// Create a MongoClient with a MongoClientOptions object to set the Stable Api version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const router = express.Router();
module.exports = router;

app.get('/', (req, res) => {
        res.render('index.html');
    });


app.listen(3000, () => {
    console.log('express server started');

}); 
