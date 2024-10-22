import React from 'react';

const DrinkDetails = ({ data }) => {
    return (
        <div>
            <h1>{data.strDrink}</h1>
            <img src={data.strDrinkThumb} alt={data.strDrink} />
            <p>{data.strInstructions}</p>
        </div>
    );
};

export default DrinkDetails;