import React from 'react';
import socketIOClient from "socket.io-client";

import '../styles/qrinfo.css';

export default class QRInfo extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            endpoint: "http://127.0.0.1:5000",
            qrCode: '',
            qrCodeText: '',
        }
    }

    async componentDidMount() {
        const { endpoint } = this.state;

        const socket = socketIOClient(endpoint);

        socket.on('returnInfo', async (data) => {
            const code = await this.base64ToImage(data.code);

            this.setState({ 
                qrCode: code, 
                qrCodeText: data.info, 
            });
        });
    }

    base64ToImage = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    render() {
        const { qrCode, qrCodeText } = this.state;

        return (
            <article className="shadow">
                <h2> { qrCodeText || '' } </h2>
                <img src={`data:image/jpeg;base64,${qrCode}`} />
            </article>
        );
    }
}