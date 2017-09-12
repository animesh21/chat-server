/**
 * Created by animesh on 19/8/17.
 */

// var socket = require('socket.io'),
//     http = require('http'),
//     server = http.createServer(),
//     socket = socket.listen(server);
//
// var users = {
//     1: 'animesh',
//     2: 'raghav',
//     3: ''
// };
//
// socket.on('connection', function (connection) {
//     console.log('User Connected');
//     connection.on('message', function (msg) {
//         console.log('Message sent: ' + msg);
//         socket.emit('message', msg);
//     });
// });
//
// server.listen(3000, function () {
//     console.log('Server started');
// });

var WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({port: 7007});
console.log("Server is Running...");

wss.broadcast = function broadcastMst(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg);
    });
};

wss.on('connection', function connection(ws) {
    // var remoteIp = ws.upgradeReq.connection.remoteAddress;
    // console.log('Connection received: ' + remoteIp);

    ws.on('message', wss.broadcast);
});
