import { useCart } from '../CartWidget/CartContext';
import { useState } from 'react';

const AddItemButton = ({ product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Number(e.target.value))} />
      <button className="btn btn-primary w-100" onClick={() => addItem(product, quantity)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default AddItemButton;
