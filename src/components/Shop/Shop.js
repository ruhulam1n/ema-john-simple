import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
 

const Shop = () => {

    
    const allProducts = fakeData.slice(0, 10);
    const [products, setProducts] = useState(allProducts);
    const [cart, setCart] = useState([]);

    const handleAddproduct = (item) =>{
        //console.log('Clicked=',item)
        const newCart = [...cart, item];
        setCart(newCart);
    }
 
    return (
        <div className='shop-container'>
            <div className="product-container">    
                {
                    products.map( pdt => <Product key={pdt.key} addClcikFun={handleAddproduct} product={pdt}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;