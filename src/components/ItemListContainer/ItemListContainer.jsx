import { useParams } from 'react-router-dom';
import mockProducts from '../../mockProducts';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const filteredProducts = categoryId 
    ? mockProducts.filter(product => product.category === categoryId)
    : mockProducts;

  return (
    <div className="item-list-container">
      <h2 className="text-center mb-4">{greeting}</h2>
      <div className="row g-4">
        {filteredProducts.map(product => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">${product.price}</p>
                <a href={`/item/${product.id}`} className="btn btn-primary w-100">Ver Detalle</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
