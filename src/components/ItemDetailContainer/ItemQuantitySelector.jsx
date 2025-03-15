import { useState } from "react";

const ItemQuantitySelector = ({ initialQuantity, onChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      onChange(newQuantity);  // Llamar la función onChange para actualizar el valor en el componente principal
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        onChange(newQuantity);  // Llamar la función onChange para actualizar el valor en el componente principal
        return newQuantity;
      });
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrease} className="decrease-button">-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease} className="increase-button">+</button>
    </div>
  );
};

export default ItemQuantitySelector;
