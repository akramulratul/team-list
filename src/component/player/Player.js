import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Player.css';

const Player = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
const handleAddProduct = (product) =>{
    console.log("product-added",product)
    const newCart = [...cart, product]
    setCart(newCart);
}
    return (
        <div className="container">
        <div className="player-container">
           <div className="product-container playerPlace">
                    {
                    products.map(pdDetails => <Product 
                        handleAddProduct = {handleAddProduct}
                        product ={pdDetails}></Product>)
                    }
            </div>
            <div className="">
                {
                <Cart cart = {cart}></Cart>
                }
            
            </div>
        </div> 
    </div>           
    );
};

export default Player;