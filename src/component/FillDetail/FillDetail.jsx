import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FillDetail.css';

const FillDetail = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        paymentMethod: 'Credit Card',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = location.state || { cartItems: [] };
    console.log('Cart Items in FillDetail:', cartItems);

    useEffect(() => {
        console.log('Cart Items in FillDetail:', cartItems); // Debugging
    }, [cartItems]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, cartItems }),
            });

            if (response.ok) {
                navigate('/ani', { state: { success: true } });
            } else {
                alert('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form className="fill-detail-form" onSubmit={handleSubmit}>
            <h2>Fill in Your Details</h2>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required></textarea>
            <textarea name="message" placeholder="Your Message for Cake" value={formData.message} onChange={handleChange} required></textarea>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FillDetail;