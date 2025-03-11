import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../About/about.css"; 
import "../Home/home.css"; // Correct relative path

const Recipes = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        // Navigate to the baking tools page (example)
        navigate('/recipe-menu'); // Use react-router for navigation
    };

    const images = [
        "https://i.pinimg.com/enabled/564x/c8/24/01/c82401ad7e09ec3deddbb993e2e8d986.jpg",
        "https://i.pinimg.com/564x/02/3a/2e/023a2e926d0d91a2876e9f045d841616.jpg",
        "https://i.pinimg.com/564x/0b/27/0e/0b270ebe8148af606d6ae8d0a5641fea.jpg",
        "https://i.pinimg.com/564x/3b/bc/f5/3bbcf5c3c350eb236185a3b0fd90c25a.jpg"
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="image-group">
                    <img src={images[0]} alt="Baking tool 1" />
                    <img src={images[1]} alt="Baking tool 2" />
                </div>
                <div className="image-group">
                    <img src={images[2]} alt="Baking tool 3" />
                    <img src={images[3]} alt="Baking tool 4" />
                </div>
                <div className="writing">
                    <h1><span>LOVE baking</span><br/>Discover Recipes</h1>
                    <p>Unleash your inner baker with our curated collection of delightful recipes. From cakes to cookies, there's something for everyone!</p>
                    <button onClick={handleExploreClick}>See Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
