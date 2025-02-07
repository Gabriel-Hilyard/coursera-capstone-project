import React from 'react';
import './Highlights.css'
import cardImgOne from './images/bruchetta.svg'
import cardImgTwo from './images/greek salad.jpg'
import cardImgThree from './images/spaghetti.jpg'


const Highlights = () => {
    return (
    <div className='highlight'>
        <div className='sectionTitle'>
            <h1>Specials</h1>
        </div>
        <div className='highlightCards'>
            <div className='highlightCard'>
                <img src={cardImgOne}
                 className='cardImage'
                 alt='Bruchetta menu item'
                 style={{height: '180px'}}/>
                 <h2>Bruchetta</h2>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
            </div>
            <div className='highlightCard'>
                <img src={cardImgTwo}
                 className='cardImage'
                 alt='Greek salad menu item'
                 style={{height: '180px'}}/>
                 <h2>Greek Salad</h2>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
            </div>
            <div className='highlightCard'>
                <img src={cardImgThree}
                 className='cardImage'
                 alt='Penne pasta menu item'
                 style={{height: '180px'}} />
                 <h2>Penne Pasta</h2>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
            </div>
        </div>
    </div>
    )
}



















export default Highlights;