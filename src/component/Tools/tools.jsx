import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../Home/home.css"; // Correct relative path

const Tools = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/tool-menu'); // Replace with your actual target route
    };

    return (
        <div className="homer">
            <div className="writing">
                <h1 className="heading"> Want to Start a New Hobby?<br/> <span>Baking Awaits!</span></h1>
                <h1 style={{ marginBottom: '30px' }}>Discover the Joy of Baking <br/></h1>
                <p>Explore a variety of essential baking tools that will help you create delicious treats. Whether you’re a novice or a seasoned baker, it's time to unleash your creativity and enjoy the art of baking!</p>
                <button onClick={handleButtonClick}>Get Started!</button> {/* Corrected handler */}
            </div>             
            <div className="circle">
                <div></div>
                <img 
                    src="https://i.pinimg.com/564x/be/cf/c2/becfc2d234e2ce67e53ec2e1d30fbd20.jpg" 
                    alt="Baking tools and utensils" 
                />
            </div>
        </div>
    );
}

export default Tools;

