import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div className="cart-container">
            <h4>Order Summary </h4>
            <p>Items Orderd: {cart.length}</p>
            
        </div>
    );
};

export default Cart;