import React from 'react';
import './About.css';
import chefsLaughing from './images/ChefsLaughing.jpg'

const About = () => {
    return (
        <div className='aboutComponent'>
            

            <div className='textSection'>
                <h1>About Little Lemon</h1>

                <p style={{fontSize:'1.5em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent in libero aliquet, volutpat eros et, commodo quam. 
                    Quisque in placerat lacus. Vestibulum sit amet egestas est. 
                    Etiam a sollicitudin nisl, in vulputate felis. </p>
            </div>

            <div className='aboutImage'>
                <img src={chefsLaughing}
                style={{height: '500px'}}
                alt='owners of little lemon in kitchen' />

            </div>
        </div>
    )
}










export default About;