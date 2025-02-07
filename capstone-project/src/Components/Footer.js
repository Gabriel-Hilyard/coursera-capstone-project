import React from 'react';
import FooterLogo from './images/logo-white.png';
import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <footer className="FooterBody">
            <div>
            <img src={FooterLogo} alt="A plate of food in the footer" 
            style={{height: '300px'}}/>
            </div>
            <div className="FooterColumns">
                <ul className="FooterLinks">
                    <li 
                    style={{marginBottom:'10px', fontWeight: 'bold'}}>Footer Navigation</li>
                    <li><a className="FooterLink" href='Footer'>Home</a></li>
                    <li><a className="FooterLink" href='Footer'>About</a></li>
                    <li><a className="FooterLink" href='Footer'>Menu</a></li>
                    <li><a className="FooterLink" href='Footer'>Reservations</a></li>
                    <li><a className="FooterLink" href='Footer'>Order Online</a></li>
                    <li><a className="FooterLink" href='Footer'>Login</a></li>
                </ul>
           
            
                <ul className="FooterLinks">
                    <li 
                    style={{marginBottom:'10px', fontWeight:'bold'}}>Contact</li>
                    <li>1111 Fake Avenue</li>
                    <li>(818) 888-8888</li>
                    <li>littlelemon@example.com</li>
                </ul>
          
          
                <ul className="FooterLinks">
                    <li style={{marginBottom:'10px', fontWeight:'bold'}}>Socials</li>
                    <IconContext.Provider 
                    value={{className:'react-icons', size: 60, verticalAlign: 'middle'}}>
                    <li><a href='Footer' style={{textDecoration: 'none'}}><FaInstagramSquare /></a></li>
                    <li><a href='Footer' style={{textDecoration: 'none'}}><FaFacebookSquare /></a></li>
                    <li><a href='Footer' style={{textDecoration: 'none'}}><FaSquareXTwitter /></a></li>
                    </IconContext.Provider>
                </ul>
            </div>
        </footer>
    )
}




export default Footer;


