import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (

    <div className="container mt-4">

      <h2>Your Cart</h2>

      {cart.map(item => (

        <div key={item.id} className="card p-3 mb-3">

          <h5>{item.title}</h5>
          <p>Price: ${item.price}</p>

          <div>

            <button
              className="btn btn-secondary"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </button>

            <span className="mx-3">{item.quantity}</span>

            <button
              className="btn btn-secondary"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>

          </div>

          <button
            className="btn btn-danger mt-2"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>

      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

    </div>

  );
}

export default Cart;