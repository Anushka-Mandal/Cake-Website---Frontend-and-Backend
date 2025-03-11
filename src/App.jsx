import './App.css';
import FillDetail from './component/FillDetail/FillDetail';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // Import useState for cart management
import Navbar from './component/navbr/navbar';
import Homepage from './pages/homepage/HomePage';
import CakeOfTheMonth from './pages/Cake_month/month';
import CakeMenu from './pages/menu/cake_menu';
import ToolsMenu from './pages/menu/tool';
import Recipes from './pages/menu/recipe';
import Cart from './component/cart/cart';
import Footer from './component/footer';
import AboutUs from './pages/aboutUs/about_us';
import Review from './pages/review/Review';
import RecipePage from './pages/menu/RecipePage'; 
import FAQ from './pages/faq/FAQ.JSX';
import OrderSuccessful from './component/cart/ani';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart or update quantity if already in cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        // If the product is already in the cart, increase quantity
        return prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add new item with quantity = 1
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Function to update the quantity of an item in the cart (increase/decrease)
  const updateCart = (id, action) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item.id === id) {
          if (action === 'increase') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrease' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cake-of-the-month" element={<CakeOfTheMonth />} />
        <Route path="/cake-menu" element={<CakeMenu addToCart={addToCart} />} />
        <Route path="/tool-menu" element={<ToolsMenu addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateCart={updateCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipe-menu" element={<Recipes />} />
        <Route path="/review" element={<Review />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path = "/faq" element = {<FAQ/>}/>
        <Route path='/ani' element={<OrderSuccessful/>}/>
        <Route path='/FillDetail' element={<FillDetail/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

