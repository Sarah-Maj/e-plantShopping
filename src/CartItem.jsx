import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-items-container">
      <h2 className="cart-header">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.name}</p>
                <p className="cart-item-description">{item.description}</p>
                <p className="cart-item-cost">{item.cost}</p>
                <button className="cart-item-remove" onClick={() => handleRemove(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">Total Items: {items.length}</div>
          <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
      <button onClick={onContinueShopping} className="continue-shopping-btn">Continue Shopping</button>
    </div>
  );
}

export default CartItem;