import { useState } from "react";
import { useCart } from "../CartWidget/CartContext";

const Checkout = () => {
  const { cart, clearCart, finalizePurchase } = useCart();
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({ ...buyerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await finalizePurchase(buyerInfo);
    setOrderId(id); // Muestra el ID de la orden al usuario
  };

  return (
    <div className="container text-center">
      <h2>Finalizar Compra</h2>
      {orderId ? (
        <div>
          <h3>Gracias por tu compra!</h3>
          <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={buyerInfo.name}
            onChange={handleInputChange}
            className="form-control mb-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={buyerInfo.email}
            onChange={handleInputChange}
            className="form-control mb-3"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={buyerInfo.phone}
            onChange={handleInputChange}
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-success">
            Confirmar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
