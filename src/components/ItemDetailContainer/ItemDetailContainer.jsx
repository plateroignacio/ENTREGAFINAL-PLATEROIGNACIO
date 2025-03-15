import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();  // Obtienes el id del item desde la URL
  
  return (
    <div>
      <h2>Detalle del Producto: {id}</h2>
      {/* Aquí mostrarías los detalles del producto con id */}
    </div>
  );
}

export default ItemDetailContainer;
