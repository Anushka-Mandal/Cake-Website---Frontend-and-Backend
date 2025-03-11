import React, { useState } from "react";
import './../../component/Home/home.css';
import './menu.css';

const products = [
  {
    id: 1,
    name: "Piping Bag",
    price: 150,
    img:
      "https://hasmart.co.za/wp-content/uploads/2023/11/PIPINGBAG-scaled.jpg",
  },
  {
    id: 2,
    name: "Homemade Frosting",
    price: 300,
    img:
      "https://www.becel.ca/-/media/Project/Upfield/Brands/Becel-CA/Becel-Canada/Assets/Recipes/Synced-images/5159f774-1052-4d40-912d-ff05812e210e.jpg",
  },
  {
    id: 3,
    name: "Cake Pan",
    price: 450,
    img:
      "https://images-cdn.ubuy.co.in/636495d7ccc0d323b5661f97-lawei-round-cake-pan-set-4-6.jpg",
  },
  {
    id: 4,
    name: "Muffin Pan",
    price: 400,
    img:
      "https://5.imimg.com/data5/SELLER/Default/2021/12/AC/PD/UG/60067796/61vfpjgxi2l-sl1203--500x500.jpg",
  },
  {
    id: 5,
    name: "5 Cookie Cutter",
    price: 250,
    img:
      "https://spiderjuice.in/wp-content/uploads/2023/10/SpiderJuice-12-Pieces-Cookie-Cutter-Stainless-Steel-Cookie-Cutter-with-Different-Shape1.webp",
  },
  {
    id: 6,
    name: "Steel Spatula",
    price: 350,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_tye0oJEaQTfsrMMoxFJae6eoS4-2sHBfaIFLNYCoa6kB2hqUWgOrVjrkZg3XqjuS4U&usqp=CAU",
  },
  {
    id: 7,
    name: "Sprinkles",
    price: 140,
    img:
      "https://delightfuladventures.com/wp-content/uploads/2022/07/are-sprinkles-vegan-or-not-vegan.jpg",
  },
  {
    id: 8,
    name: "Fondant",
    price: 330,
    img:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Marshmallow-Fondant-1-1.jpg",
  },
  {
    id: 9,
    name: "Cupcake Liners",
    price: 120,
    img:
      "https://i.pinimg.com/736x/83/ba/b2/83bab2fc3d67555c32688b65838aadc7.jpg",
  },
  {
    id: 10,
    name: "Rolling Pin",
    price: 500,
    img:
      "https://i.pinimg.com/736x/80/a9/cf/80a9cf4cfa60dfe41a3ec8c09bb21f79.jpg",
  },
  {
    id: 11,
    name: "Measuring Cups",
    price: 320,
    img:
      "https://i.pinimg.com/736x/22/4b/32/224b328afbe4146ae9a95a072462ffa6.jpg",
  },
  {
    id: 12,
    name: "Whisk",
    price: 180,
    img:
      "https://i.pinimg.com/736x/6e/93/63/6e93637d41bc0751d10197205d0fd175.jpg",
  },
  {
    id: 13,
    name: "Pastry Brush",
    price: 140,
    img:
      "https://i.pinimg.com/736x/aa/4c/1a/aa4c1a20c00ea1092cb362c1a8defcc1.jpg",
  },
  {
    id: 14,
    name: "Baking Mat",
    price: 350,
    img:
      "https://i.pinimg.com/736x/09/cc/f8/09ccf8d5e1b1f002266c1deb06af50fd.jpg",
  },
  {
    id: 15,
    name: "Cake Turntable",
    price: 900,
    img:
      "https://i.pinimg.com/736x/cd/c3/8c/cdc38cb468c575c1c4bc1a9158ec0c76.jpg",
  },
  {
    id: 16,
    name: "Decorating Tips Set",
    price: 600,
    img:
      "https://i.pinimg.com/736x/21/66/27/216627b5da6b9a54b29ea53134353491.jpg",
  },
];

const ToolsMenu = ({ addToCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div>
      <div className="writing container">
        <h1>Knead a New Hobby?</h1>
        <h1><span>Let's Get Baking!</span></h1>
      </div>
      <div className="writing products">
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

export default ToolsMenu;