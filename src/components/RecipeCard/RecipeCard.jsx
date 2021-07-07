import React, { useEffect , useState } from 'react';
import './RecipeCard.css';
const RecipeCard = ({recipe,openModal})=>{



    return(
        <div className="recipe-card">
            <img className="recipe-image" src={recipe.recipe.image} alt="recipe card"/>

            <div className="recipe-name">
                <p className="name">{((recipe.recipe.label.length>12)?(recipe.recipe.label.slice(0,10)+ '...'):
                (recipe.recipe.label)) }</p>
            </div>
            <div className="recipe-add-button">
                <button className="add-recipe">
                    + {Math.floor(recipe.recipe.calories) + ' cal'}
                </button>
            </div>
            <div className="view-more-container" onClick={()=>(openModal(true))}>
                <p>VIEW MORE</p>
            </div>
        </div>
    );
}

export default RecipeCard;