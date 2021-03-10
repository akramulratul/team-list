import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    // const totalPrice = selectedPlayers.reduce((total , prd) => total + prd.auction,0);
    // const total = selectedPlayers.reduce( (total,prd) => total + prd.auction, 0 )
    let total =0;
    for(let i = 0; i<cart.length; i++)
    {
        const product = cart[i];
        total = total + product.auction;
    }


    return (
        <div className=''>
            <h1>My Players: {cart.length}</h1>
            
            {
                cart.map (player => <p>{player.Name}  
                 : ${player.auction}</p>)
            }
            <p>Total PRice: ${total}</p>
        </div>
    );
};

export default Cart;