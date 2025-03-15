import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../../mockProducts';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
