import React from 'react';
import logo from "../assets/logo.png";
import "../app/App.css";

export default function HeadeComponents() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />

            <div className='right_header'>
                <h3>Downloads</h3>
            </div>
        </div>
    )
}
