import React, { Component } from 'react';

import QRInfo from '../components/QRInfo';
import './Gerador.css';

class Gerador extends Component {
    render() {
        return (
            <section id="qr-list">
                <QRInfo />
            </section>
        )
    }
}
export default Gerador;