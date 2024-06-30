// App.js
import React from 'react';
import NavigationComponent from './Components/NavigationComponent';
import { CartProvider } from './Components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import Checkout from './Checkout';
//import ShoppingCart from './ShoppingCart';
import './App.css';

function App() {
  return (

    <CartProvider>
          <NavigationComponent />
    </CartProvider>
  );
}

export default App