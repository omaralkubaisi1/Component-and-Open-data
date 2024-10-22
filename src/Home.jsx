import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the application!</h1>
            <h3>Please choose one of the following options:</h3>
            <Link to="/product" className="link-button">
                Go to Product Page
            </Link>
            <br />
            <Link to="/opendata" className="link-button">
                Go to OpenData Page
            </Link>
        </div>
    );
};

export default Home;