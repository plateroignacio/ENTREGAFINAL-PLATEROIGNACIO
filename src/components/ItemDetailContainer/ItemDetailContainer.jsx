import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
