import React from 'react';
import { Link } from 'react-router-dom'; 
import './CakeOfTheMonth.css';

function CakeOfTheMonth() {
    return (
        <div className="container">
            <h1 className="title">Cake of the Month: Red Velvet Delight</h1>
            <img 
                className="image" 
                src="https://assets.surlatable.com/m/6ae5b930e82d3ed1/72_dpi_webp-REC-505190-Red-Velvet-Layered-Cake.jpg" 
                alt="Red Velvet Cake"
            />
            <p className="description">
                Indulge in our featured Red Velvet Delight - a moist, tender cake layered with rich cream cheese frosting. 
                This cake is the perfect balance of cocoa and sweetness, with a stunning red color that makes every slice 
                special. Limited edition for this month only!
            </p>
            <Link to="/cake-menu">
            <button className="button">Order Now</button>
            </Link>
        </div>
    );
}

export default CakeOfTheMonth;