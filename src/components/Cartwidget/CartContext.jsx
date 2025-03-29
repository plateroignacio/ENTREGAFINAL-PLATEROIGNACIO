import { createContext, useContext, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const finalizePurchase = async (buyerInfo) => {
    const order = {
      buyer: buyerInfo,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Orden creada con ID:", docRef.id);
      clearCart(); 
      return docRef.id; 
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, finalizePurchase }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
