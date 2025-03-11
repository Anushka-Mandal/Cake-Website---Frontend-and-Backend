import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/cake-menu');
    };

    return (
        <div className="homer">
            <div className="writing">
                <h1 className="heading">Indulge in Our<br/> <span>Delicious Cakes</span></h1>
                <h1 style={{ marginBottom: '30px' }}>Order Your Favorite <br/><span>Today!</span></h1>
                <p>Discover a world of delightful flavors and exquisite designs. Our cakes are freshly baked with love, perfect for any occasion—from birthdays to weddings. Treat yourself or someone special!</p>
                <button onClick={handleButtonClick}>Explore Now!</button>
            </div>             
            <div className="circle">
                <img 
                    src="https://i.pinimg.com/564x/29/aa/b7/29aab7b851921268bff0328ab523db6c.jpg" 
                    alt="Delicious cake" 
                />
            </div>
        </div>
    );
};

export default Home;
