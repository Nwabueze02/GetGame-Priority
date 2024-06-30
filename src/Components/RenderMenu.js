import React, { useState } from 'react'; // Import useState from React
import MenuButton from './menuButton'; // Import the MenuButton component
import menuData from '../Assets/MenuData.json';

//React Component to render menu page
//Author:
function MenuSection({ type, items, addToCart }) {
  return (
    <div className="menu-section">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="text-info" >{type}</th>
              <th className="text-center">Small</th>
              <th className="text-center">Large</th>
              <th>Action</th> {/* Add a new column for the action (button) */}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              // Replace MenuItem with MenuButton and pass necessary props
              <MenuButton key={index} name={item.name} prices={item.prices} addToCart={addToCart} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Menu() {
  // Define addToCart function using useState hook
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // For example, you can update the cart state
    console.log('Adding item to cart:', item);
  };

  return (
    <div className="container">
      {menuData.menuItems.map((section, index) => (
        <div key={index} className="row">
          <div className="col">
            {/* Pass the addToCart function to the MenuSection component */}
            <MenuSection {...section} addToCart={addToCart} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;