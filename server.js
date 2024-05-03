var express = require('express');
var app = express();
let port = process.env.port || 3000;
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);
require('./dbConnection');
let router = require('./route/route')

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


io.on('connection', (socket) => {
    console.log('client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000)
});

http.listen(port, () => {
    console.log('express server started');
});
