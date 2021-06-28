import React from 'react';
import './RecipeCard.css';
const RecipeCard = ({recipe})=>{
    return(
        <div className="recipe-card">
            <img className="recipe-image" src={recipe.recipe.image} alt="recipe card"/>

            <div className="recipe-name">
                <p className="name">{((recipe.recipe.label.length>12)?(recipe.recipe.label.slice(0,10)+ '...'):
                (recipe.recipe.label)).toUpperCase() }</p>
            </div>
            <div className="recipe-add-button">
                <button className="add-recipe">
                    + {recipe.recipe.calories}
                </button>
            </div>

        </div>
    );
}

export default RecipeCard;