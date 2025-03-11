import React from 'react';

const Footer = () => {
    return (
        <footer>
            <style>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    footer {
                        background-color: #111;
                    }

                    .footerContainer {
                        width: 100%;
                        padding: 70px 30px 20px;
                    }

                    .socialIcons {
                        display: flex;
                        justify-content: center;
                    }

                    .socialIcons a {
                        text-decoration: none;
                        padding: 10px;
                        background-color: white;
                        margin: 10px;
                        border-radius: 50%;
                    }

                    .socialIcons a i {
                        font-size: 2em;
                        color: black;
                        opacity: 0.9;
                    }

                    /* Hover effect on social media icon */
                    .socialIcons a:hover {
                        background-color: #111;
                        transition: 0.5s;
                    }

                    .socialIcons a:hover i {
                        color: white;
                        transition: 0.5s;
                    }

                    .footerNav {
                        margin: 30px 0;
                    }

                    .footerNav ul {
                        display: flex;
                        justify-content: center;
                        list-style-type: none;
                        padding: 0;
                    }

                    .footerNav ul li {
                        margin: 0 20px;
                    }

                    .footerNav ul li a {
                        color: white;
                        text-decoration: none;
                        font-size: 1.3em;
                        opacity: 0.7;
                        transition: 0.5s;
                    }

                    .footerNav ul li a:hover {
                        opacity: 1;
                    }

                    .footerBottom {
                        background-color: #000;
                        padding: 20px;
                        text-align: center;
                    }

                    .footerBottom p {
                        color: white;
                    }

                    .designer {
                        opacity: 0.7;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-weight: 400;
                        margin: 0 5px;
                    }
                `}
            </style>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.google-plus.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-google-plus"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <div className="footerNav">
                    <ul>
                        {/* <li><a href="#home">HOME</a></li>
                        <li><a href="#service">SERVICES</a></li>
                        <li><a href="#menu">DEALS</a></li>
                        <li><a href="p3menu.html" target="_blank" rel="noopener noreferrer">MENU</a></li>
                        <li><a href="#contact">CONTACT US</a></li> */}
                        <li><a href="#service">LIVE</a></li>
                        <li><a href="#menu">BAKE</a></li>
                        <li><a href="#MENU">EAT</a></li>
                        <li><a href="#contact">LOVE</a></li>
                        <li><a href="#contact">REPEAT</a></li>


                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy; 2024; <span className="designer">Dessertopia<sup>TM</sup></span></p>
            </div>
        </footer>
    );
};

export default Footer;


