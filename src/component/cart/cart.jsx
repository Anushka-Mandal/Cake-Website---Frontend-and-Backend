import React from 'react';
import { Link } from 'react-router-dom'; 
import './cart.css'; // For cart-specific styles
import './ani';

const CONVENIENCE_FEES = 99;


const Cart = ({ cartItems, removeFromCart, updateCart, clearCart }) => {
  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <img src='/emptycart.jpeg'/>
      </div>
    );
  }

  // Calculate subtotal based on quantity
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPrice = subtotal + CONVENIENCE_FEES;

  // Handle checkout
  const handleCheckout = () => {
    console.log('Checkout clicked');
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <div className="quantity-controls">
                <button 
                  onClick={() => updateCart(item.id, 'decrease')} 
                  className="quantity-btn">
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateCart(item.id, 'increase')} 
                  className="quantity-btn">
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
        <button className="clear-cart-btn" onClick={clearCart}>Clear All</button>
      </div>
      <div className="cart-summary-container">
        <div className="price-item">
          <span className="price-item-tag">Subtotal</span>
          <span className="price-item-value">₹{subtotal}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <div className="cart-summary">
          <h3>Total Price: Rs {totalPrice}</h3>

          <div>
            <Link to="/FillDetail" state={{ cartItems }}>
                <button className="checkout-btn">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;