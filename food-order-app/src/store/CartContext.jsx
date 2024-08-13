import { createContext, useReducer } from "react";
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // ... update the state to add a meal item
    // state.item.push(action.item); //mutate  state not usable and rather than ten time items quantity should be increase to 10 item should be added one time.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id //action.item is receiving veichle 

    );// check the item is existing in the item array

    const updatedItems = [...state.items]
    if(existingCartItemIndex > -1){ //if not found it would return -1
      
    } else{
      updatedItems.push(action.item);
    }
    return updatedItems;
  }
  if (action.type === "REMOVE_ITEM") {
    // ... remove an item from the state
  }
  return state;
}
export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
