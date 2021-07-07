import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './ResultContainer.css';

const ResultContainer =({recipes,openModal})=>{
    return(
        <div className="results-container">
            {
             recipes.map(recipe=>(
                <RecipeCard recipe={recipe} openModal={openModal} />
             ))   
            }
        </div>
    );
}

export default ResultContainer ;