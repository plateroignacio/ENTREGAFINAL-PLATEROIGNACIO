import { useParams } from 'react-router-dom';
import mockProducts from '../../mockProducts';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const product = mockProducts.find(product => product.id === parseInt(itemId));

  return (
    <div className="text-center">
      {product ? (
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">{product.description}</p>
            <p className="card-text fw-bold">${product.price}</p>
          </div>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
