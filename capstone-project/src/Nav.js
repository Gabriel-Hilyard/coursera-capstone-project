import React from 'react';
import Logo from './images/Logo.svg';
import HamburgerIcon from './images/🦆 icon _hamburger menu.svg'
import './Nav.css'

const Nav = () => {

    return (
        <nav className='navStyle'>

            <div className='leftContainerStyle'>
                <img src={HamburgerIcon} alt="Hamburger Menu" style={{alignItems: 'center', height: '20px', marginRight: '40px'}}/>
                <img src={Logo} alt="Logo" style={{height: '50px'}}/>

            </div>
        <ul className='navLinksStyle'>
            <li><a className='navLinks' href={Nav}>Home</a></li>
            <li><a className='navLinks' href={Nav}>About</a></li>
            <li><a className='navLinks' href={Nav}>Menu</a></li>
            <li><a className='navLinks' href={Nav}>Reservations</a></li>
            <li><a className='navLinks' href={Nav}>Order Online</a></li>
            <li><a className='navLinks'href={Nav}>Login</a></li>
        </ul>

        </nav>
    )
}



export default Nav;