# QRCode-Js
Gerador de códigos QR Code

## Principais tecnologias

* [NodeJs](https://nodejs.org/en/)
* [Socket.io](https://socket.io/)
* [Express](https://expressjs.com/pt-br/)
* [qr-image](https://github.com/alexeyten/qr-image)

## Como usar

Clone o projeto:
```
git clone https://github.com/trndd/qrcode-js.git
```

Instale dependencias:

```
yarn install
```
Rode o servidor com:

```
nodemon src/server.js
```

## Interface do sistema

![screenshot](https://imgur.com/mG9RbxQ.png)

* Insira alguma informação no campo de texto
* Clique em "Gerar"
* O código QR Code irá aparecer na lista abaixo com sua respectiva informação ao lado
