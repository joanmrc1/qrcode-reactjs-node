const express = require('express');
const path = require('path');
const qr = require('qr-image');

const app = express();
const router = express.Router();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
});

io.on('connection', socket => {
    console.log(`Socket conectado ${socket.id}`);

    socket.on('sendInfo', info => {
        let code = qr.imageSync(info, { type: 'png' });
        
        socket.emit('returnInfo', { info, code });
    });
});

server.listen(3000, () => {
    console.log('Server iniciado com sucesso!');
});
