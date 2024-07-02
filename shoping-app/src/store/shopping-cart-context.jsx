import {createContext} from 'react';

export const CartContext = createContext({
    items:[],
    addItemToCart: ()=>{},
    updateItemQuantity: ()=>{},
});

export function CartContextProvider(){
    
}