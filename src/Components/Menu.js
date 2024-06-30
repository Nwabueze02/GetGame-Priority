import React from 'react';
import { useCart } from './CartContext'; // Import the useCart hook from your CartContext file
import MenuButton from './MenuButton'; // Import the MenuButton component
import menuData from '../Assets/MenuData.json';

//Component that established menu table
//Author:
function MenuSection({ type, items }) {
  const { addToCart } = useCart(); // Use the useCart hook to access the addToCart function from the context

  return (
    <div className="menu-section">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-info">{type}</th>
              <th className="text-center">Small</th>
              <th className="text-center">Large</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <MenuButton key={index} name={item.name} prices={item.prices} addToCart={addToCart} /> // Pass the addToCart function as a prop to the MenuButton component
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Menu() {
  const { cart: cartItems } = useCart(); // Use the useCart hook to access the cart items from the context

  return (
    <div className="container">
      {menuData.menuItems.map((section, index) => (
        <div key={index} className="row">
          <div className="col">
            <MenuSection {...section} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
