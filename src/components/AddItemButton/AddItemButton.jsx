import { useCart } from "../CartWidget/CartContext";
import { useState } from "react";

const AddItemButton = ({ product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="add-to-cart">
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="form-control mb-2"
      />
      <button
        className="btn btn-primary"
        onClick={() => addItem(product, quantity)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default AddItemButton;
