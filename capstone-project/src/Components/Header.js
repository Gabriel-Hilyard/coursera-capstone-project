import React from 'react';
import Logo from './images/Logo.svg';

const Header = () => {

    return (
        <img src={Logo} alt="Logo" style={{height: '50px', display: 'flex'}}/>
    )
}

export default Header;