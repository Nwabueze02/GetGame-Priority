import React from 'react';
import Login from './Login';
import { useCart } from './CartContext'; // Import the useCart hook from your CartContext file

//Component that maps shoppingCart prop to a list of items selected by users
//Author: ""
function RenderShoppingCart() {
  const { cart: cartItems } = useCart(); // Use the useCart hook to access the cart items from the context

  return (
    <div>
      <Login cartItems={cartItems} />
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} 
              <div>Price: ${item.price}</div>
              <div>Size: {item.size}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RenderShoppingCart;
