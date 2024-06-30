// NavigationComponent.js
import React, { useState } from 'react';
import Home from './RenderHome';
import MenuPage from './RenderMenu'; // Import the MenuPage component
import Checkout from './Checkout';
import ShoppingCart from './RenderShoppingCart';

//Navigation component that renders site pages based on useState
//Disclaimer: Attempted to handle this using React Routing DOM, however errors occured and this was the only alternative we found to work
//Author: Devon Gent
function NavigationComponent() {
  const [currentPage, setCurrentPage] = useState('ShoppingCart');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Define separate components for rendering each page
  const renderPage = () => {
    switch (currentPage) {
      case 'ShoppingCart':
        return <ShoppingCart />;
      case 'Home':
        return <Home />;
      case 'Menu':
        return <MenuPage />; // Render the MenuPage component for the 'Menu' page
      case 'Checkout':
        return <Checkout />;
      
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={`nav-item ${currentPage === 'ShoppingCart' ? 'active' : ''}`} onClick={() => navigateTo('ShoppingCart')}>
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className={`nav-item ${currentPage === 'Home' ? 'active' : ''}`} onClick={() => navigateTo('Home')}>
                <a className="nav-link" href="#">Home</a>
              </li>
              
             
              
              <li className={`nav-item ${currentPage === 'Old' ? 'active' : ''}`} onClick={() => navigateTo('Old')}>
                <a className="nav-link" href="#">Old User</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Render the current page */}
      {renderPage()}
    </div>
  );
}

export default NavigationComponent;