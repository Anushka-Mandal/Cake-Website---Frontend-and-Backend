import React, { useState } from 'react';
import './../../component/Home/home.css';
import './menu.css';

const CakeMenu = ({ addToCart }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const products = [
    { id: 1, name: 'Orange Cake', price: 950, img: 'https://i.pinimg.com/736x/52/c5/b8/52c5b8c5f096750f4d6e8db8d1cf072c.jpg' },
    { id: 2, name: 'DeathBite Chocolate Cake', price: 1100, img: 'https://i.pinimg.com/474x/f0/d2/1f/f0d21f5bec274c9d0b20460d506e02e0.jpg' },
    { id: 3, name: 'Blueberry Bliss Cake', price: 1350, img: 'https://i.pinimg.com/474x/1e/59/7d/1e597d6a6e88195ae389e18c8b037de3.jpg' },
    { id: 4, name: 'Caramel Custard Cake', price: 1200, img: 'https://i.pinimg.com/736x/e6/40/c6/e640c64c6c52854b09d70697fb64e63c.jpg' },
    { id: 5, name: 'Red Velvet Cake', price: 950, img: 'https://i.pinimg.com/474x/bb/6a/b6/bb6ab6cd2c3e09d70bf27151d052a8d4.jpg' },
    { id: 6, name: 'Lemon Blueberry Cake', price: 1100, img: 'https://i.pinimg.com/736x/9d/3a/3c/9d3a3c39f39300b60671f3f4ff7e3637.jpg' },
    { id: 7, name: 'Tiramisu Cake', price: 1300, img: 'https://i.pinimg.com/736x/3e/9a/9a/3e9a9a95d72ae12a136b23ef350bebdd.jpg' }, 
    { id: 8, name: 'Choco-Mocha Cake', price: 1400, img: 'https://i.pinimg.com/736x/2d/77/03/2d7703869c0163f56a8a9efefd6a799a.jpg' },
    { id: 9, name: 'Ombre Butterfly Cake', price: 1500, img: 'https://liliyum.com/cdn/shop/files/OmbreButterflycake_2400x.jpg?v=1684319267' },
    { id: 10, name: 'Happy Birthday Butterfly Cake', price: 1800, img: 'https://i5.walmartimages.com/asr/de91a356-5c9f-4e6d-8f8f-2c02efa670a9.42ae5be374d5b00c4676f737dc7898ea.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF' },
    { id: 11, name: 'Strawberry Shortcake Cake', price: 1200, img: 'https://sugaryums.com/wp-content/uploads/2022/04/Japanese-Strawberry-Shortcake-Cover-SugarYums.jpg' },
    { id: 12, name: 'Triple Chocolate Cake', price: 1000, img: 'https://i.pinimg.com/control/564x/c1/77/1a/c1771ab4412317569ff4124fbd3dc280.jpg' },
    { id: 13, name: 'Vanilla Berry Cake', price: 850, img: 'https://i.pinimg.com/control/564x/30/81/54/3081541d0a61f2b45cbba79d19bcec53.jpg' },
    { id: 14, name: 'Blue Oreo Cake', price: 1250, img: 'https://i.pinimg.com/control/564x/6c/f4/c4/6cf4c4b84942dc14a60121f0135abd15.jpg' },
    { id: 15, name: 'Macaroon Cake', price: 1400, img: 'https://caketalk.ae/wp-content/uploads/2022/01/19-Colorful-Macaroon-Cake.jpg' },
    { id: 16, name: 'Unicorn Cake', price: 1200, img: 'https://archziner.com/wp-content/uploads/2019/02/gold-horn-ears-pink-blue-yellow-green-purple-roses-unicorn-birthday-cake.webp' },
    
    { id: 17, name: 'Mango Cheesecake', price: 1600, img: 'https://i.pinimg.com/474x/0f/7a/49/0f7a498a146333967479faa7dabace4c.jpg' },
    { id: 18, name: 'Blueberry Cheesecake', price: 1700, img: 'https://i.pinimg.com/736x/c2/a9/5e/c2a95edd039cbe3efc7d5d2e88dfa980.jpg' },
    { id: 19, name: 'Lotus Cheesecake', price: 1650, img: 'https://i.pinimg.com/474x/6a/80/ec/6a80ec77a290b34f326b8841ece01d0d.jpg' },
    { id: 20, name: 'Raspberry Cheesecake', price: 1800, img: 'https://i.pinimg.com/736x/71/42/b3/7142b33c7350a5377e14467c0748b567.jpg' }
    
    
    
  ];    



  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true); // Show popup
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  return (
    <div>
      <div className="writing container">
        <h1>Explore exquisite flavours</h1>
        <h1><span>of Our Cakes</span></h1>
      </div>
      <div className="products writing">
        {products.map((product) => (
          <div className="items" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <div className="price">Rs {product.price}</div>
            <button
              className="cart"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <p>Item added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default CakeMenu;

