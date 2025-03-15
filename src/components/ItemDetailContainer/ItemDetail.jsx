import { useState } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "../AddItemButton/AddItemButton";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);  // Definir la cantidad inicial como 1

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);  // Actualizar la cantidad cuando cambie
  };

  return (
    <div className="card">
      <img 
        src={`/images/${product.image}`} 
        className="card-img-top" 
        alt={product.name} 
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>

        {/* Componente de descripción */}
        <Description text={product.description} />
        
        {/* Selector de cantidad */}
        <ItemQuantitySelector 
          initialQuantity={quantity} 
          onChange={handleQuantityChange} 
        />

        {/* Mostrar precio total dependiendo de la cantidad */}
        <p className="card-text">
          <strong>Precio: </strong>
          ${(product.price * quantity).toFixed(2)}
        </p>
        
        {/* Botón para agregar al carrito */}
        <AddItemButton product={product} quantity={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;
