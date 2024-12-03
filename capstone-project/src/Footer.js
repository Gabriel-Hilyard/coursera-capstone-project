import React from 'react';
import FooterImage from './images/restaurantFood.jpg';
import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="FooterBody"> 
            <div>
            <img src={FooterImage} alt="A plate of food in the footer" style={{height: '310px', marginRight:'50px'}}/>
            </div>
            <div className="FooterColumns">
                <ul className="FooterLinks">
                    <li style={{marginBottom:'10px'}}>Footer Navigation</li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Home</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>About</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Menu</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Reservations</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Order Online</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Login</a></li>
                </ul>
           
            
                <ul className="FooterLinks">
                    <li style={{marginBottom:'10px'}}>Contact</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>E-mail</li>
                </ul>
          
          
                <ul className="FooterLinks">
                    <li style={{marginBottom:'10px'}}>Social Media:</li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}><FaInstagramSquare /></a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Facebook</a></li>
                    <li><a href='Footer' style={{textDecoration: 'none', color: 'black'}}>Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}




export default Footer;


