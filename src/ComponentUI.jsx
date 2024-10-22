import React from 'react';

function ComponentUI({ image, title }) {
    return (
        <h1>
            <img src={image} id='componentImage' alt={title} />
            {title}
        </h1>
    );
}

export default ComponentUI;
