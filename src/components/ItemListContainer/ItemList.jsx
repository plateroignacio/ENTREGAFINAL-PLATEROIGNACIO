import Item from "../ItemDetailContainer/Item";

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
