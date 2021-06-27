import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './ResultContainer.css';

const ResultContainer =({recipes})=>{
    return(
        <div className="results-container">
            {
             recipes.map(recipe=>(
                <RecipeCard recipe={recipe} />
             ))   
            }
        </div>
    );
}

export default ResultContainer ;