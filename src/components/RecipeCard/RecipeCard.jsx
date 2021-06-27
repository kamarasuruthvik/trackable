import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({recipe})=>{
    return(
        <div className="recipe-card">
            <div className="recipe-image">
                <img src={recipe.recipe.image} alt="recipe-image"/>
            </div>
            <div className="recipe-name">
                <p>{recipe.recipe.label}</p>
            </div>
            <div className="recipe-add-button">
                <button>
                    Add
                </button>
            </div>

        </div>
    );
}

export default RecipeCard;