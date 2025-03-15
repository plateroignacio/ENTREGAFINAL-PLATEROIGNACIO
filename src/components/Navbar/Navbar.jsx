import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/category1">Categoría 1</Link></li>
        <li><Link to="/category/category2">Categoría 2</Link></li>
        <li><Link to="/item/1">Producto 1</Link></li>
        <li><Link to="/item/2">Producto 2</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
