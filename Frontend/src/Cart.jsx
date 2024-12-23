/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Cart.css";

 
const Cart = ({ cartItem }) => {


  const [items, setItems] = useState(() => {
    return cartItem
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.title === value.title) // Filter duplicates based on `title`
      )
      .map((item) => ({
        ...item,
        quantity: 1, // Add quantity key with value 1 to each item
      }));
  });

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = quantity;
    setItems(updatedItems);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-items">
        {items.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="cart-item-p" >{item.author}</p>
                <p className="cart-item-p" >Rs {item.price}</p>
                <div className="cart-item-quantity">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(index)}
                className="remove-item-btn"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {items.length > 0 && (
        <div className="cart-summary">
          <h3>Total: {getTotalPrice()}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
