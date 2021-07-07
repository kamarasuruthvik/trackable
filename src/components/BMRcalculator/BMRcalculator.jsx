import React from 'react';
import BMRform from '../BMRform/BMRform';
import './BMRcalculator.css';

const BMRcalculator=({BMRchange})=>{
    return(
        <div className="bmr">
            <div className="bmr-container">
            <div className="bmr-description">
                
                <h3 className="bmr-calculator-header">
                    What is BMR?
                </h3>
               
             
                <p className="content">
                    BMR stands for <span className="highlight">B</span>asal <span className="highlight">M</span>etabolic <span className="highlight">R</span>ate.
                    <br/>
                    It tells us how many calories we burn by going about our day.
                    <br/>
                    You might ask yourself how does it help us in planning our diet?
                    <br/>
                    <br/>
                    <span className="punchline">
                    Simple
                    </span>
                    <br/>
                    <br/>
                    eat less than BMR , loose weight 🚲. 
                    <br/>
                    equal to BMR , maintain weight 🏌. 
                    <br/>
                    eat more than the BMR, gain weight 💪.
                </p>
                
            </div>
            <div className="BMRform">
            <BMRform BMRchange={BMRchange} />
            </div>
            
            
        </div>
        </div>
        
    );
}

export default BMRcalculator;
