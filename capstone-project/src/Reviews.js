import React from 'react';
import './Reviews.css';
import ReviewerOne from './images/ReviewerOne.jpg'
import ReviewerTwo from './images/ReviewerTwo.jpg'
import ReviewerThree from './images/ReviewerThree.jpg'

const Reviews = () => {
    return (
        <div className="reviewSection"> 
         <div className="reviewTitle">
            <h1>Reviews</h1>
         </div>
         <div className="reviewCards">
            <div className="reviewComponent">
                <h3>Max Harper</h3>
                <img src={ReviewerOne}
                 alt='Reviewer'
                 style={{height: '200px', borderRadius: '15px'}}/>
            </div>
            <div className="reviewComponent">
                <h3>Jordan Blackwell</h3>
                <img src={ReviewerTwo}
                 alt='Reviewer'
                 style={{height: '200px', borderRadius: '15px'}}/>
            </div>
            <div className="reviewComponent">
                <h3>Kai Rivers</h3>
                <img src={ReviewerThree}
                 alt='Reviewer'
                 style={{height: '200px', borderRadius: '15px'}}/>
            </div>
         </div>
        </div>
    )
}







export default Reviews