const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {origin: '*'}});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('Message recu => '+ msg)
    });
});

server.listen(4000, () => {
    console.log('listening on *:3000');
});