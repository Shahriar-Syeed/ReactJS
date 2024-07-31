import {createContext, useState, useReducer} from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products.js';

export const CartContext = createContext({
    items:[],
    addItemToCart: ()=>{},
    updateItemQuantity: ()=>{},
});

function shoppingReducer(state, action){
  if(action.type === 'ADD_ITEM'){
    const updatedItems = [...state.items]; //deep copy
    
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      // ...state,//for multiple object value spread first
      items: updatedItems,
    };
  }

  if(action.type === 'UPDATE_ITEM'){
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  // return state;
  throw Error('Unknown action: ' + action.type);
}

export default function CartContextProvider({children}){
  const [shoppingState, shoppingDispatch] = useReducer(shoppingReducer, {
    items: [],
  });
    // const [shoppingCart, setShoppingCart] = useState({
    //     items: [],
    //   });
    
      function handleAddItemToCart(id) {
        shoppingDispatch({
          type:'ADD_ITEM',
          payload:id,
        })
        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
    
        //   const existingCartItemIndex = updatedItems.findIndex(
        //     (cartItem) => cartItem.id === id
        //   );
        //   const existingCartItem = updatedItems[existingCartItemIndex];
    
        //   if (existingCartItem) {
        //     const updatedItem = {
        //       ...existingCartItem,
        //       quantity: existingCartItem.quantity + 1,
        //     };
        //     updatedItems[existingCartItemIndex] = updatedItem;
        //   } else {
        //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        //     updatedItems.push({
        //       id: id,
        //       name: product.title,
        //       price: product.price,
        //       quantity: 1,
        //     });
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingDispatch({

          type:'UPDATE_ITEM',
          payload:{
          productId, //productId : productId (same name and value)
          amount, //amount : amount (same name and value)
          }
        })
        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
        //   const updatedItemIndex = updatedItems.findIndex(
        //     (item) => item.id === productId
        //   );
    
        //   const updatedItem = {
        //     ...updatedItems[updatedItemIndex],
        //   };
    
        //   updatedItem.quantity += amount;
    
        //   if (updatedItem.quantity <= 0) {
        //     updatedItems.splice(updatedItemIndex, 1);
        //   } else {
        //     updatedItems[updatedItemIndex] = updatedItem;
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
    
      const ctxValue = {
        // items: shoppingCart.items,
        items: shoppingState.items,
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity,
      }
    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}