import React from 'react';
import './Reviews.css';
import ReviewerOne from './images/ReviewerOne.jpg'
import ReviewerTwo from './images/ReviewerTwo.jpg'
import ReviewerThree from './images/ReviewerThree.jpg'

const Reviews = () => {
    return (
        <div className="reviewSection"> 
         
            <h1>Reviews</h1>
         
         <div className="reviewCards">

            <div className="reviewComponent">
                <div className='reviewerDesc'>
                <h3 style={{color: '#DDA411'}}>Max Harper</h3>
                <p>4.5/5</p>
                </div>
                <img src={ReviewerOne}
                 alt='Reviewer'
                 style={{height: '250px', borderRadius: '15px'}}/>
                 <div className='reviewText'>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
                    </div>
            </div>
            
            <div className="reviewComponent">
                <div className='reviewerDesc'>
                <h3 style={{color: '#DDA411'}}>Jordan Blackwell</h3>
                <p>5/5</p>
                </div>
                <img src={ReviewerTwo}
                 alt='Reviewer'
                 style={{height: '250px', borderRadius: '15px'}}/>
               <div className='reviewText'>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
                    </div>
            </div>
            
            <div className="reviewComponent">
              <div className='reviewerDesc'>
                <h3 style={{color: '#DDA411'}}>Kai Rivers</h3>
                <p>4.8/5</p>
              </div>
                <img src={ReviewerThree}
                 alt='Reviewer'
                 style={{height: '250px', borderRadius: '15px'}}/>
                 <div className='reviewText'>
                 <p>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. 
                    <br/>Etiam sit amet rutrum libero.
                    <br/> Nam quis odio a lectus tempus
                    <br/> posuere in id mauris. </p>
                  </div>
            </div>
         </div>
        </div>
    )
}







export default Reviews;