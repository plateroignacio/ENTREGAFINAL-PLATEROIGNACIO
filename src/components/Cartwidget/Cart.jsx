import { useCart } from "../CartWidget/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const order = {
      buyer: {
        name: "Tu Nombre", // Reemplaza con datos del usuario
        email: "tu.email@gmail.com", // Reemplaza con datos del usuario
        phone: "123456789", // Reemplaza con datos del usuario
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: total,
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Orden creada con ID:", docRef.id);
      clearCart();
      alert("¡Compra finalizada con éxito!");
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Ocurrió un error al finalizar la compra.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Carrito de Compras</h2>
      {cart.length > 0 ? (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex">
                  <img
                    src={`/images/${item.image}`}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3 className="text-center my-4">Total: ${total}</h3>
          <div className="text-center">
            <button className="btn btn-success mx-2" onClick={handleCheckout}>
              Finalizar Compra
            </button>
            <button className="btn btn-secondary mx-2" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/" className="btn btn-primary mx-2">
              Seguir Comprando
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center">
          Tu carrito está vacío. <Link to="/">Volver a la tienda</Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
