import { useContext } from "react";
import { CartContext } from "../Context/Cart1";

function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li key={item.name}>
            {item.name} ${item.price}
          </li>
        ))}

      <h5>Total Bill: ${total}</h5>
    </div>
  );
}

export default Cart;
