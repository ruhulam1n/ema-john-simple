import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce( (total,item) => total+item.price, 0);
    const grandTotal = Number(totalPrice.toFixed(2))
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;