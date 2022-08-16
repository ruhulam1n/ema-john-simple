import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const {name, price, img, seller,stock} = props.product;
    const getClickedFun = props.addClcikFun;
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-title'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only: {stock} left in stock - Order soon</small></p>
                <button onClick={() => getClickedFun(props.product)}><FontAwesomeIcon icon={faShoppingCart} /><span>add to cart</span></button>
            </div>
        </div>
    );
};

export default Product;