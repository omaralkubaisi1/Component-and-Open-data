import React from 'react';

const IngredientList = ({ data }) => {
    if (!data) return null;

    const ingredients = Object.keys(data)
        .filter(key => key.startsWith('strIngredient') && data[key]) 

    return (
        <div id="ingredientList">
            {ingredients.map((ingredient, index) => (
                <div key={index}>{data[ingredient]}</div>
            ))}
        </div>
    );
};

export default IngredientList;