import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation
import './../../component/Home/home.css';
import './menu.css';

function CakeRecipes() {
    const [cartItems, setCartItems] = useState([]);

    const recipes = [
        { id: 1, name: 'Chocolate Cake', description: 'This rich and moist chocolate cake is perfect for every occasion.', img: 'https://i.pinimg.com/564x/1d/e8/7d/1de87d6fbed594cd708262eee646a80a.jpg' },
        { id: 2, name: 'Vanilla Cake', description: 'A classic vanilla cake with a delicate, buttery texture.', img: 'https://i.pinimg.com/564x/0f/6b/09/0f6b09053aed2445e78521003a4585b6.jpg' },
        { id: 3, name: 'Red Velvet Cake', description: 'This stunning red velvet cake is velvety soft with cream cheese frosting.', img: 'https://i.pinimg.com/564x/e0/3f/6e/e03f6e9247585eb7758496a0135efd63.jpg', path: '/red-velvet-cake' },
        { id: 4, name: 'Lemon Cake', description: 'This zesty lemon cake is refreshing and perfect for summer.', img: 'https://i.pinimg.com/564x/c5/1b/68/c51b6831dff818fe36089e7d5d6fbdc9.jpg' },
        { id: 5, name: 'Blueberry Cake', description: 'This soft and moist blueberry cake is bursting with fresh blueberries.', img: 'https://i.pinimg.com/564x/08/9d/69/089d69aee82115be83cab3844b755ee0.jpg' },
        { id: 6, name: 'Strawberry Cake', description: 'This classic dessert features layers of fresh strawberries and whipped cream.', img: 'https://i.pinimg.com/564x/1e/92/70/1e92708d4c30a0c225cd6e2a8d6aac8b.jpg' },
        { id: 7, name: 'Biscoff Cake', description: 'A spiced cake infused with the rich flavor of Biscoff cookies, topped with a smooth Biscoff frosting.', img: 'https://i.pinimg.com/564x/54/e5/7d/54e57d2e86fe0e8c90463bdb4004c269.jpg' },
        { id: 8, name: 'Nutella Cake', description: 'A chewy and soft cake made with glutinous rice flour, giving it a unique, slightly sticky texture.', img: 'https://i.pinimg.com/564x/c1/65/3b/c1653be94f2fddff187fc5260c9c3266.jpg' },
        { id: 9, name: 'Carrot Cake', description: 'A moist carrot cake with a hint of spice and topped with cream cheese frosting.', img: 'https://i.pinimg.com/564x/25/36/0d/25360dc993acdef39907cba33106cf99.jpg' },
        { id: 10, name: 'Coffee Cake', description: 'A deliciously moist cake with a hint of coffee flavor and a crumbly cinnamon topping.', img: 'https://i.pinimg.com/564x/e6/a7/59/e6a7596684eef11a846d00fddf864be0.jpg' },
        { id: 11, name: 'Brownie Caramel Cheesecake Swirl', description: 'A rich, fudgy brownie base topped with a creamy cheesecake swirl and a luscious caramel drizzle.', img: 'https://i.pinimg.com/736x/70/44/96/704496fe5a89a0e082560550b17ac434.jpg' },
        { id: 12, name: 'Oreo Cake', description: 'A delicious cake made with crushed Oreo cookies and a creamy filling, perfect for all Oreo lovers.', img: 'https://i.pinimg.com/564x/c4/61/6b/c4616be473f0956925c9e023e12689ff.jpg' },
    ];
    
    
    
    


    const addToCart = (id) => {
        const selectedRecipe = recipes.find(recipe => recipe.id === id);
        if (selectedRecipe) {
            setCartItems([...cartItems, selectedRecipe]);
        }
    };

    return (
        <div>
            <div className="writing container">
                <h1>Our Cake Recipes</h1>
                <h1><span>Discover delicious recipes</span></h1>
            </div>
            <div className="products writing">
                {recipes.map((recipe) => (
                    <div className="items" key={recipe.id}>
                        <img src={recipe.img} alt={recipe.name} />
                        <h2>{recipe.name}</h2>
                        <div className="description"><p>{recipe.description}</p></div>
                        <Link to={`/recipe/${recipe.id}`}>
                            <button className="cart">View Recipe</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CakeRecipes;
