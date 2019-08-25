const express = require('express');
const path = require('path');
const qr = require('qr-image');

const app = express();
const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const page = path.join(__dirname+'/view/public/index.html');

app.use('/', (req, res) => {
    res.sendFile(page);
});

io.on('connection', socket => {
    console.log(`Socket conectado ${socket.id}`);

    socket.on('sendInfo', info => {
        let code = qr.imageSync(info, { type: 'png' });

        io.sockets.emit('returnInfo', { info, code });
    });
});

server.listen(5000, () => {
    console.log('Server iniciado com sucesso!');
});
