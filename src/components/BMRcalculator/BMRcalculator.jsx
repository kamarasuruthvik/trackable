import React from 'react';
import BMRform from '../BMRform/BMRform';
import './BMRcalculator.css';

const BMRcalculator=()=>{
    return(
        <div className="bmr">
            <div className="bmr-container">
            <div className="bmr-description">
                
                <h3 className="header">
                    What is BMR?
                </h3>
               
             
                <p className="content">
                    BMR stands for <span class="highlight">B</span>asal <span class="highlight">M</span>etabolic <span class="highlight">R</span>ate.
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
            <BMRform />
            
        </div>
        </div>
        
    );
}

export default BMRcalculator;
