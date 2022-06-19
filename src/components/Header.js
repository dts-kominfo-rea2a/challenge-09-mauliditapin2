// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <h1>Call a Friends</h1>
            <h5>Your Friendly contact app</h5>
            <span>**********************************************************************************</span>
        </div>
    )
}

export default Header;