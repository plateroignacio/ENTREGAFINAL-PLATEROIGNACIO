import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../../mockProducts';
import ItemList from './ItemList';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Productos de la categoría ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
