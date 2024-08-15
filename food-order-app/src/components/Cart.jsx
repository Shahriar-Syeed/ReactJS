import { useContext } from "react";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartData from "./CartData.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  const totalCartItems = cartCtx.items.reduce((totalCartItems, item) => {
    return totalCartItems + item.quantity;
  }, 0);
  return (
    <>
    <nav>
      <Button textOnly onClick={handleShowCart}>
        Cart<span>({totalCartItems})</span>
      </Button>
    </nav>
    <CartData/>
    </>
  );
}
