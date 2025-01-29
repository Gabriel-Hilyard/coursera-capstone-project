import React from 'react';
import './Main.css'
import heroImg from './images/restaurant.jpg'
import { Link } from 'react-router-dom';



const Main = () => {


    return (
        <div className="heroSection">
        <div className="heroSectionText">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='lemonDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Praesent in libero aliquet, volutpat eros et, commodo quam.
            <br /> Quisque in placerat lacus. Vestibulum sit amet egestas est. 
            <br />Etiam a sollicitudin nisl, in vulputate felis. </p>
        <Link to='./Reservations'>
        <button className='reservationButton'>
            Reserve a table
        </button>
        </Link>
        </div>
        <div className="heroSectionImg">
            <img src={heroImg} 
            alt="outdoor patio area" 
            style={{height: 400, borderRadius: 10 }}/>
        </div>
        </div>
    )
}

export default Main;