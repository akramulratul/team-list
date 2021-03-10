import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className="header container">
            <img src={logo} alt=""/>
            <div className="rounded p-3  col-lg-9 all-players">
                <h1 className="banner">Top Players:</h1>

            </div>

            
        </div>
    );
};

export default Header;