import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={30} />
      {itemCount > 0 && <span className="badge bg-danger ms-2">{itemCount}</span>} 
    </div>
  );
}

export default CartWidget;
