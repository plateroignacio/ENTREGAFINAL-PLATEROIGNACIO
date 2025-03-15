import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const { categoryId } = useParams();  // Obtienes el categoryId desde la URL
  
  return (
    <div>
      <h2>Productos {categoryId ? `de la categoría ${categoryId}` : 'generales'}</h2>
      {/* Aquí mostrarías los productos filtrados por categoryId si existe */}
    </div>
  );
}

export default ItemListContainer;
