import React from 'react';
import FooterImage from './images/restaurantFood.jpg';
const Footer = () => {
    return (
        <footer style={FooterBody}>
            <div>
            <img src={FooterImage} alt="A plate of food in the footer" style={{height: '310px', marginRight:'50px'}}/>
            </div>
            <div style={FooterColumns}>
                <ul style={FooterLinks}>
                    <li style={{marginBottom:'10px'}}>Footer Navigation</li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Home</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>About</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Menu</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Reservations</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Order Online</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Login</a></li>
                </ul>
           
            
                <ul style={FooterLinks}>
                    <li style={{marginBottom:'10px'}}>Contact</li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Address</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Phone Number</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>E-mail</a></li>
                </ul>
          
          
                <ul style={FooterLinks}>
                    <li style={{marginBottom:'10px'}}>Social Media:</li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Instagram</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Facebook</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;


const FooterBody = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '702px',
    backgroundColor: '#495E57',
}

const FooterColumns = {
    display: 'flex',
}

const FooterLinks = {
    listStyleType: 'none',
    textDecoration: 'none',
    color: 'white',
}