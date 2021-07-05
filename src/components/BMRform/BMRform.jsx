import React, { useState } from 'react';
import './BMRform.css';

const BMRform = ()=>{

    const [height,setHeight]= useState(-1);
    const [weight,setWeight]= useState(-1);
    const [age,setAge]= useState(-1);
    const [gender,setGender] = useState(1);
    const [BMR,setBMR]= useState(0);

    const trackBMR= (e)=>{
        e.preventDefault();
        
    }
    return(

        <div className="bmr-form">
            <h3 className="bmr-form-header">
                Find your BMR
            </h3>
            <div className="bmr-form-container">
                <form id="bmr-form">
                <div className="bmr-form-input-container">
                    <div className="input-container">
                        <input type="number" name="height" className="height" placeholder="height" requrired
                        onChange={e=>(setHeight(e.target.value))}/>
                        <label htmlFor="height">cms</label>
                    </div>

                    <div class="input-container">
                        <input type="number" className="weight" placeholder="weight" name="weight" requried 
                        onChange={e=>(setWeight(e.target.value))}/>
                        <label htmlFor="weight">kgs</label>
                    </div>

                    <div className="input-container">
                        <select name="gender" id="gender" form="bmr-form" onChange={e=>(setGender(e.target.value))}>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <input type="number" className="age" placeholder="age" name="age" requried 
                        onChange={e=>(setAge(e.target.value))} />
                        <label htmlFor="weight">years</label>
                    </div>
                </div>
                <div className="bmr-form-submit-container">
                    <button 
                    type="submit" 
                    className="bmr-form-submit-button"
                    onClick={e=>(trackBMR(e))}>Track BMR</button>
                </div>
                </form>
                
            </div>
        </div>
    );

}

export default BMRform;