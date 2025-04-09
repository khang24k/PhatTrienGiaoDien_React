import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //npm install uuid

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    const cartItem = {
      ...book,
      cartItemId: uuidv4(), // add ID duy nhất
    }
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart(cart.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};