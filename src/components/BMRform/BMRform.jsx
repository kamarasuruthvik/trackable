import React from 'react';
import './BMRform.css';

const BMRform = ()=>{
    return(

        <div className="bmr-form">
            <h3 className="bmr-form-header">
                Find your BMR
            </h3>
            <div className="bmr-form-container">
                <form id="bmr-form">
                <div className="bmr-form-input-container">
                    <div className="input-container">
                        <input type="number" name="height" className="height" placeholder="height" requrired/>
                        <label htmlFor="height">cms</label>
                    </div>

                    <div class="input-container">
                        <input type="number" className="weight" placeholder="weight" name="weight" requried />
                        <label htmlFor="weight">kgs</label>
                    </div>

                    <div className="input-container">
                        <select name="gender" id="gender" form="bmr-form">
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <input type="number" className="age" placeholder="age" name="age" requried />
                        <label htmlFor="weight">years</label>
                    </div>
                </div>
                <div className="bmr-form-submit-container">
                    <button type="submit" className="bmr-form-submit-button">Track BMR</button>
                </div>
                </form>
                
            </div>
        </div>
    );

}

export default BMRform;