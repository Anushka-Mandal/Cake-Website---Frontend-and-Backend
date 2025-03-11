// component/navbr/Navbar.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <>
                <div className="navbar">
                    <h3>Dessertopia</h3>
                    <ul className="navbar-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cake-menu">Menu</Link></li>
                        <li><Link to="/about-us">AboutUs</Link></li> 
                        <li><Link to="/review">Reviews</Link></li>
                        {/* <li><Link to="/cake-of-the-month">Cake Month</Link></li> */}
                        <li><Link to="/faq">FAQ</Link></li> {/* Add FAQ link */}
                    </ul>
                    <Link to="/cart"><i className="fa-solid fa-bag-shopping icon-large"></i></Link>
                </div>
                <hr />
            </>
        );
    }
}

export default Navbar;