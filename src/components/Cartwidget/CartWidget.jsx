import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget text-white">
      <FaShoppingCart size={30} />
      {totalItems > 0 && <span className="badge bg-danger ms-2">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;
