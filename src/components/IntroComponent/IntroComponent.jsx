import React from 'react';
import './IntroComponent.css';
import lift_image from '../../assets/fitness-lift-weights.svg';

const IntroComponent = ()=>{
    return(
        <div className="intro-component">
            <div className="intro-container">
                <div className="header-container">
                    <h2 className="header">Track your calories while finding new recipes and set your diet.</h2>
                </div>
                <div className="image-container">
                    <img src={lift_image} alt="lifting" className="lifting-image" />
                </div>
            </div>
            <div className="steps-container">
                <h3 className="steps-header">
                    Steps
                </h3>
                <ol className="steps-list">
                    <li className="steps">Find your BMR</li>
                    <li className="steps">Search recipes that you like</li>
                    <li className="steps">Add them to the calorie tracker.</li>
                    <li className="steps">Build your diet.</li>
                </ol>
            </div>
        </div>
        
    );
}

export default IntroComponent;