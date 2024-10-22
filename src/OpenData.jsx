import React, { useEffect, useState } from 'react';
import DrinkDetails from './DrinkDetails';
import IngredientList from './IngredientList';

const OpenData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.drinks[0]);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setSearchResult(result.drinks ? result.drinks[0] : null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Welcome to Open Data Page</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Hae cocktailia"
                />
                <button type="submit">Hae</button>
            </form>

            {searchResult ? (
                <DrinkDetails data={searchResult} />
            ) : (
                data && <DrinkDetails data={data} />
            )}
            <IngredientList data={searchResult || data} />
        </div>
    );
};

export default OpenData;
