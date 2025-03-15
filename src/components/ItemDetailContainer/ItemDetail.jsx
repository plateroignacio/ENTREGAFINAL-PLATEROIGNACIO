import { useState } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "../AddItemButton/AddItemButton";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);  

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);  
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


        <Description text={product.description} />
        

        <ItemQuantitySelector 
          initialQuantity={quantity} 
          onChange={handleQuantityChange} 
        />


        <p className="card-text">
          <strong>Precio: </strong>
          ${(product.price * quantity).toFixed(2)}
        </p>
        

        <AddItemButton product={product} quantity={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;
