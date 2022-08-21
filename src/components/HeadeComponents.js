import React from 'react';
import logo from "../assets/logo.png";
import "../app/App.css";

export default function HeadeComponents() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />

            <div className='right_header header'>
                <button className="grey_button yellow_button">Login</button>
                <button className="yellow_button ">Register</button>
                <h3>Downloads</h3>
                <h3>English(India)</h3>
                <h3>USD</h3>
            </div>
        </div>
    )
}
