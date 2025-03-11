import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';
import "../Home/home.css"; // Correct relative path

const About = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/about-us'); // Replace with your actual target route
    };
    const handleExploreClick1 = () => {
        navigate('/cake-of-the-month'); // Replace with your actual target route
    };

    const images = [
        "https://i.pinimg.com/enabled/564x/69/b9/dc/69b9dc9be4f378930574be82f3356b37.jpg",
        "https://i.pinimg.com/enabled/564x/fb/bd/49/fbbd498c5017d71110c276259acb3122.jpg",
        "https://i.pinimg.com/736x/f6/35/4d/f6354d847df71eb682511fb1a4d854fd.jpg",
        "https://i.pinimg.com/enabled/564x/19/42/e6/1942e674a70bc0f17fedf183d15a961b.jpg"
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
                    <h1>Know More <span>About Us</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                    <button onClick={handleExploreClick}>Learn More</button>
                    <p>See Our best Cake</p>
                    <button onClick={handleExploreClick1}>Cake of The Month</button>
                </div>
            </div>
        </div>
    );
};

export default About;




