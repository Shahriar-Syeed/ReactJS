import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Button from "./UI/Button.jsx";
import CartDataItem from "./CartDataItem.jsx";

export default function CartData() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          // <li key={item.id}>
          //   {item.name} - {item.quantity}
          // </li>
          <CartDataItem
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            key={item.id}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <div className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length>0 && <Button onClick={userProgressCtx.showCheckout}>Go to Checkout</Button>}
      </div>
    </Modal>
  );
}
