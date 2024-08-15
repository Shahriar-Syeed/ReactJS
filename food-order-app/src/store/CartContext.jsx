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
      (item) => item.id === action.item.id //action.item is receiving  

    );// check the item is existing in the item array
    // console.log(existingCartItemIndex)
    const updatedItems = [...state.items];
    if(existingCartItemIndex > -1){ //if not found it would return -1
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,// ...state.items[existingCartItemIndex],
        quantity: existingItem.quantity + 1,
      };
      // console.log('existingItem', existingItem, 'updatedItem', updatedItem)
      updatedItems[existingCartItemIndex] = updatedItem;
    } else{
      updatedItems.push({...action.item, quantity:1,});
    }
    return {...state, items: updatedItems};
  }
  if (action.type === "REMOVE_ITEM") {
    // ... remove an item from the state
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id //action.item is receiving 
    );
    const existingCartItem = state.items[existingCartItemIndex];
    
    const updatedItems = [...state.items];

    if(existingCartItem.quantity === 1){
      updatedItems.splice(existingCartItemIndex, 1);
    }else{
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex]= updatedItem;// updatedItems[existingCartItem]= updatedItem;this is wrong
    }
    return {...state, items: updatedItems};// previously wrong written item: instead of items:
  }
  return state;
}
export function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction ]=useReducer(cartReducer, { items: [] });


  function addItem(itemValue){
    dispatchCartAction({type:"ADD_ITEM",item: itemValue});
  };
  function removeItem(idValue){
    dispatchCartAction({type:"REMOVE_ITEM",id:idValue});
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItem,
    removeItem: removeItem,
  };
  console.log(cartContext);
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
export default CartContext;
