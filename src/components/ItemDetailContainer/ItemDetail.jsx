import AddItemButton from "../AddItemButton/AddItemButton";

const ItemDetail = ({ product }) => {
  return (
    <div className="card">
      <img src={`/images/${product.image}`} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>Precio: </strong>${product.price}</p>
        <AddItemButton product={product} />
      </div>
    </div>
  );
};

export default ItemDetail;
