// CartContext.js

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cart.filter(item => item !== itemToRemove);
        setCart(updatedCart);
    };

    const updateQuantity = (itemToUpdate, newQuantity) => {
        const updatedCart = cart.map(item =>
            item === itemToUpdate ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
