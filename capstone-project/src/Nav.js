import React from 'react';
import Logo from './images/Logo.svg';
import HamburgerIcon from './images/🦆 icon _hamburger menu.svg'

const Nav = () => {
    
    return (
        <nav style={navStyle}>

            <div style={leftContainerStyle}>
                <img src={HamburgerIcon} alt="Hamburger Menu" style={{alignItems: 'center', height: '20px', marginRight: '40px'}}/>
                <img src={Logo} alt="Logo" style={{height: '50px'}}/>
                
            </div>
        <ul style={navLinksStyle}>
            <li><a href={Nav}>Home</a></li>
            <li><a href={Nav}>About</a></li>
            <li><a href={Nav}>Menu</a></li>
            <li><a href={Nav}>Reservations</a></li>
            <li><a href={Nav}>Order Online</a></li>
            <li><a href={Nav}>Login</a></li>
        </ul>
        
        </nav>
    )
}

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',  // Space out the logo and nav links
    alignItems: 'center',             // Center items vertically
    padding: '10px 20px',
};

const leftContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  
};

const navLinksStyle = {
    display: 'flex',
    gap: '10px',
    listStyleType: 'none',
};

export default Nav;