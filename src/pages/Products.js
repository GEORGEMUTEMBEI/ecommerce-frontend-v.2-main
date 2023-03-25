import React, { useState } from "react";

const Products = () => {
  const [product, setProduct] = useState({
    name: "Product Name",
    price: 10.99,
    description: "Product Description",
    image: "https://via.placeholder.com/250",
    quantity: 1,
  });

  const handleAddToCart = () => {
    // Add product to cart
  };

  

  return (
    <div className="product-page">
          <div>
        <h2>Product Categories</h2>
        <select >
          <option value="Fresh Produce">Fresh Produce</option>
          <option value="Fashion">Fashion</option>
          <option value="Appliances">Appliances</option>
          <option value="Beauty">Beauty</option>
          <option value="Home and Office">Home and Office</option>
          <option value="TVs and Gaming">TVs and Gaming</option>
        </select>
      </div>
      <div className="product-container">
  <div className="product-image">
    <img src="images/product-1.jpg" alt={product.name} />
  </div>
  <div className="product-details">
    <h1 className="New Car">{product.name}</h1>
    <p className="product-description">{product.description}</p>
    <p className="product-price">Ksh{product.price.toFixed(2)}</p>
    <div className="product-quantity">
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={product.quantity}
        onChange={(e) =>
          setProduct({
            ...product,
            quantity: parseInt(e.target.value),
          })
        }
      />
    </div>
    <button className="add-to-cart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>
</div>
<div className="product-container">
  <div className="product-image">
    <img src= "images/product-4.jpg" alt={product.name} />
  </div>
  <div className="product-details">
    <h1 className="product-name">{product.name}</h1>
    <p className="product-description">{product.description}</p>
    <p className="product-price">Ksh{product.price.toFixed(2)}</p>
    <div className="product-quantity">
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={product.quantity}
        onChange={(e) =>
          setProduct({
            ...product,
            quantity: parseInt(e.target.value),
          })
        }
      />
    </div>
    <button className="add-to-cart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>
</div>
<div className="product-container">
  <div className="product-image">
    <img src="images/product-3.jpg" alt={product.name} />
  </div>
  <div className="product-details">
    <h1 className="product-name">{product.name}</h1>
    <p className="product-description">{product.description}</p>
    <p className="product-price">Ksh{product.price.toFixed(5)}</p>
    <div className="product-quantity">
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={product.quantity}
        onChange={(e) =>
          setProduct({
            ...product,
            quantity: parseInt(e.target.value),
          })
        }
      />
    </div>
    <button className="add-to-cart" onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>

  
</div>

    </div>
  );
};

export default Products;




