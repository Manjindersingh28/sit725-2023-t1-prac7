var express = require("express");
let Router = require('./routers/router');

// setup db connection
require('./dbConnection');

var app = express();
let server = require('http').createServer(app);

// setup socket.io
let io = require('socket.io')(server);
io.on('connection', (socket) => {
console.log('a user connected');
socket.on('disconnect', () => {
console.log('user disconnected');
});
setInterval(()=>{
socket.emit('number', parseInt(Math.random()*10));
}, 1000);
});

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', Router);

const router = express.Router();
module.exports = router;

app.get('/', (req, res) => {
    res.render('index.html');
});


server.listen(3000, () => {
    console.log('express server started');
}); 
