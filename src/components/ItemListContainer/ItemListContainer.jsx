import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../../firestore";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>{categoryId ? `Productos de la categoría ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
