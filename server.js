const express = require('express');
const qr = require('qr-image');
const app = express();

app.get('/qrcode', (req, res) => {
    const text = "Matheus é lindo";
    const code = qr.image(text, { type: 'png' });

    res.type('png');
    code.pipe(res);
});

app.listen(3000, () => {
    console.log('Server iniciado com sucesso!');
});