import { useCart } from '../CartWidget/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container text-center">
      <h2>Resumen de compra</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <p key={item.id}>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>
          ))}
          <h3>Total: ${total}</h3>
          <button className="btn btn-success" onClick={clearCart}>Finalizar Compra</button>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default Checkout;
