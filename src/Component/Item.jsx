import { useContext } from "react";
import { CartContext } from "../Context/Cart1";
import PropTypes from "prop-types";
function Item(props) {
  const cart = useContext(CartContext);
  console.log("Cart", cart);
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <p> Price :{props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
}
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
