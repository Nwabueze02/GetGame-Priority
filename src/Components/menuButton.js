import React, { useState } from 'react'; // Import React and useState from 'react'
import { Button, Modal, Alert } from 'react-bootstrap';
import { useCart } from './CartContext';

//Component that declares menu buttons and handles their click events.
//Author: Devon Gent

//Menu button function that will occur onclick
function MenuButton({ name, prices }) {
  console.log('Prices: ', prices);
  const {addToCart} = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  //Confirm function that records information selected and adds to Cart
  const handleConfirm = () => {
    if (selectedSize) {
      // Create an item object with name and size
      //Declares item variable based on user selections when "Add to cart" button is selected
      const item = { 
        name: name,
        size: selectedSize,
        price: prices[selectedSize === 'Small' ? 0 : 1] // Assuming prices array corresponds to ['Small', 'Large']
      };
      // Call the addToCart function and pass the item
      addToCart(item); 
      
      //Close modal
      handleCloseModal();
      //Display confirmation banner
      setShowBanner(true);
      // Hide banner after 3 seconds
      setTimeout(() => setShowBanner(false), 3000); 
    }
  };
  //Returns:
  //Button - For adding to cart, selecting size, and confirming item. Uses functions to handle onclick events
  //Modal - Pop up menu that will prompt users to make a size selection. Will close upon confirmation and then display a 3 second banner providing user with visual feedback of their actions.
  return (
    <>
      <tr>
        <td>{name}</td>
        <td className="text-center">{prices[0]}</td>
        <td className="text-center">{prices[1]}</td>
        <td>
          <Button variant="primary" onClick={handleShowModal}>
            Add to Cart
          </Button>
        </td>
      </tr>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button 
            variant={selectedSize === 'Small' ? 'success' : 'secondary'} 
            onClick={() => handleSizeSelection('Small')}
            style={{ marginRight: '10px' }}
          >
            Small
          </Button>
          <Button 
            variant={selectedSize === 'Large' ? 'success' : 'secondary'} 
            onClick={() => handleSizeSelection('Large')}
          >
            Large
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      {showBanner && (
        <Alert variant="success" 
            style={{ position: 'fixed',             //Sets alert position to fixed
                     top: '10px',                   //Sets distance from top of window
                     left: '50%',                   //Sets distance horizontally from window
                     transform: 'translateX(-50%)', //Moves object 50% of its own width to center the object on the screen
                     zIndex: 9999                   //Ensures alert overlaps all other page content
                     }}>
          Item added to cart!
        </Alert>
      )}
    </>
  );
}

export default MenuButton;