import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const getCartData = ()=>{
  return(
    async(dispatch)=>{
      
      const fetchData = async () =>{
        const response = await fetch("https://react-redux-cb271-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");
        if (!response.ok) {
          throw new Error("Could not fetch cart data!");
        }
        const data = await response.json();
        return data;
      }
      try{
        const cartData = await fetchData();
        dispatch(cartActions.replaceCartData({
          items:cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }));
      }catch(error){
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: `Fetching cart data failed! ${error.message}`,
          })
        );
      }
    }
  );
}

export const sendCartData =  (cartValue)=>{
  return async (dispatch)=>{
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );
    
    const sendRequest = async () =>{
      
      const response = await fetch(
        "https://react-redux-cb271-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cartValue.items, totalQuantity: cartValue.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
      // const responseData = await response.json();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Sending cart data failed! ${error.message}`,
        })
      );
    }
  };
};