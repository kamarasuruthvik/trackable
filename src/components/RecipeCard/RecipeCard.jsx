import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({recipe})=>{
    return(
        <div className="recipe-card">
            <img className="recipe-image" src={recipe.recipe.image} alt="recipe-image"/>

            <div className="recipe-name">
                <p>{recipe.recipe.label}</p>
            </div>
            <div className="recipe-add-button">
                <button className="add-recipe">
                    Add
                </button>
            </div>

        </div>
    );
}

export default RecipeCard;