import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kale (Sukuma Wiki)",
    image: "https://via.placeholder.com/150x150",
    price: 2.99,
    category: "Vegetables",
    subcategory: "Kale (Sukuma Wiki)",
    description: "This is a description of Kale (Sukuma Wiki).",
  },
  {
    id: 2,
    name: "Spinach",
    image: "https://via.placeholder.com/150x150",
    price: 3.99,
    category: "Vegetables",
    subcategory: "Spinach",
    description: "This is a description of Spinach.",
  },
  {
    id: 3,
    name: "Cabbage",
    image: "https://via.placeholder.com/150x150",
    price: 1.99,
    category: "Vegetables",
    subcategory: "Cabbage",
    description: "This is a description of Cabbage.",
  },
  {
    id: 4,
    name: "Tomatoes",
    image: "https://via.placeholder.com/150x150",
    price: 0.99,
    category: "Vegetables",
    subcategory: "Tomatoes",
    description: "This is a description of Tomatoes.",
  },
  {
    id: 5,
    name: "Onions",
    image: "https://via.placeholder.com/150x150",
    price: 0.49,
    category: "Vegetables",
    subcategory: "Onions",
    description: "This is a description of Onions.",
  },
  {
    id: 6,
    name: "Green Beans",
    image: "https://via.placeholder.com/150x150",
    price: 2.49,
    category: "Vegetables",
    subcategory: "Green Beans",
    description: "This is a description of Green Beans.",
  },
  {
    id: 7,
    name: "Okra",
    image: "https://via.placeholder.com/150x150",
    price: 1.99,
    category: "Vegetables",
    subcategory: "Okra",
    description: "This is a description of Okra.",
  },
  {
    id: 8,
    name: "Eggplant",
    image: "https://via.placeholder.com/150x150",
    price: 2.99,
    category: "Vegetables",
    subcategory: "Eggplant",
    description: "This is a description of Eggplant.",
  },
  {
    id: 9,
    name: "Pumpkin",
    image: "https://via.placeholder.com/150x150",
    price: 4.99,
    category: "Vegetables",
    subcategory: "Pumpkin",
    description: "This is a description of Pumpkin.",
  },
  {
    id: 10,
    name: "Green Pepper",
    image: "https://via.placeholder.com/150x150",
    price: 1.49,
    category: "Vegetables",
    subcategory: "Green Pepper",
    description: "This is a description of Green Pepper.",
  },
];

const categories = [
  {
    name: "Vegetables",
    subcategories: [
      "Kale (Sukuma Wiki)",
      "Spinach",
      "Cabbage",
      "Tomatoes",
      "Onions",
      "Green Beans",
      "Okra",
      "Eggplant",
      "Pumpkin",
      "Green Pepper",
      ],
      },
      ];
      
      const Products = () => {
      const [cart, setCart] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState("Vegetables");
      const [selectedSubcategory, setSelectedSubcategory] = useState(
      "Kale (Sukuma Wiki)"
      );
      
      const addToCart = (product) => {
      setCart([...cart, { ...product, quantity: 1 }]);
      };
      
      const filteredProducts = products.filter(
      (product) =>
      product.category === selectedCategory &&
      product.subcategory === selectedSubcategory
      );
      
      return (
      <div className="product-page">
      <div className="categories-section">
      <h2>Categories</h2>
      {categories.map((category) => (
      <div key={category.name}>
      <h3>{category.name}</h3>
      <ul>
      {category.subcategories.map((subcategory) => (
      <li
      key={subcategory}
      className={
      selectedSubcategory === subcategory ? "selected" : ""
      }
      onClick={() => setSelectedSubcategory(subcategory)}
      >
      {subcategory}
      </li>
      ))}
      </ul>
      </div>
      ))}
      </div>
      <div className="products-section">
      <h2>Products</h2>
      <div className="products-list">
      {filteredProducts.map((product) => (
      <div key={product.id} className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: Ksh {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      ))}
      </div>
      </div>
      <div className="cart-section">
      <h2>Cart</h2>
      <div className="cart-items">
      {cart.map((item) => (
      <div key={item.id} className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: Ksh {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      </div>
      ))}
      </div>
      </div>
      </div>
      );
      };
      
      export default Products;
