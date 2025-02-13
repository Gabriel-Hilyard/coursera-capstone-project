import React from 'react';
import Logo from './images/Logo.svg';
import HamburgerIcon from './images/🦆 icon _hamburger menu.svg'
import './Nav.css'

const Nav = () => {

    return (
        <nav className='navStyle'>

            <div className='leftContainerStyle'>
                <img src={HamburgerIcon} alt="Hamburger Menu" style={{alignItems: 'center', height: '20px', marginRight: '40px'}}/>
                <a href='/'>
                <img src={Logo} 
                alt="Logo" 
                style={{height: '50px'}}/>
                </a>

            </div>
        <ul className='navLinksStyle'>
            <li><a className='navLinks' href="/">Home</a></li>
            <li><a className='navLinks' href="/#about">About</a></li>
            <li><a className='navLinks' href="/#menu">Menu</a></li>
            <li><a className='navLinks' href="/reservations">Reservations</a></li>
            <li><a className='navLinks' href="/#order">Order Online</a></li>
            <li><a className='navLinks'href="/#login">Login</a></li>
        </ul>

        </nav>
    )
}



export default Nav;