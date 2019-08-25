import React from 'react';
import socketIOClient from "socket.io-client";
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            qrText: '',
            endpoint: "http://127.0.0.1:5000",
        }
    }

    emitEnvet = () => {
        const { qrText, endpoint } = this.state;

        if (qrText === '')
            return
        
        const socket = socketIOClient(endpoint);
        
        socket.emit("sendInfo", qrText);
    }

    render() {
        return (
            <header id="main-header" className="shadow">
                <div className="header-content">
                    <Link to="/" id="titulo">
                        <h2>QR Code</h2>
                    </Link>

                    <div id="new-qr">
                        <input
                            onChange={(e) => this.setState({ qrText: e.target.value })}
                            type="text"
                            name="qr-data"
                            placeholder="Ex. O preço é R$ 5,00"
                            className="form-control"
                        />

                        <button 
                            className="btn btn-primary" 
                            type="submit"
                            onClick={this.emitEnvet}
                        > 
                            Gerar
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}