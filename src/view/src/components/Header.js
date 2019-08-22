import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    return (
        <header id="main-header" className="shadow">
            <div className="header-content">
                <Link to="/" id="titulo">
                    <h1>QR Code</h1>
                </Link>

                < form id="new-qr">
                    <input
                        type="text"
                        name="qr-data"
                        placeholder="Ex. O preço é R$ 5,00"
                        className="form-control"
                    />
                    <button className="btn btn-primary" type="submit">Gerar</button>
                </form >
            </div>
        </header>
    );
}