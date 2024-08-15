import { useContext } from "react";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalCartItems, item) => {
    return totalCartItems + item.quantity;
  }, 0);
  return (
    <nav>
      <Button textOnly>
        Cart<span>({totalCartItems})</span>
      </Button>
    </nav>
  );
}
