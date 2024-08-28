import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/Shop/Products.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
// import { uiActions } from "./store/ui-slice.js";
import Notification from "./components/UI/Notification.jsx";
// import { sendCartData } from "./store/cart-slice.js";
import { getCartData, sendCartData } from "./store/cart-action.js";


function App() {
  const dispatch = useDispatch();
  const uiDisplay = useSelector((state) => state.ui.cartIsVisible);
  const cartValue = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  let isInitial = useRef(true);
  useEffect(()=>{
    dispatch(getCartData());
  },[dispatch]);
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "sending...",
  //         message: "Sending cart data!",
  //       })
  //     );

  //     try {
  //       const response = await fetch(
  //         "https://react-redux-cb271-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
  //         {
  //           method: "PUT",
  //           body: JSON.stringify(cartValue),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Sending cart data failed");
  //       }
  //       dispatch(
  //         uiActions.showNotification({
  //           status: "success",
  //           title: "Success!",
  //           message: "Sent cart data successfully!",
  //         })
  //       );
  //       // const responseData = await response.json();
  //     } catch (error) {
  //       dispatch(
  //         uiActions.showNotification({
  //           status: "error",
  //           title: "Error!",
  //           message: `Sending cart data failed! ${error.message}`,
  //         })
  //       );
  //     }
  //   };
  //   if (isInitial.current) {
  //     isInitial.current = false;
  //     return;
  //   }
  //   sendCartData();
  // }, [cartValue, dispatch]);
  useEffect(() => {
   
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    if(cartValue.changed){
      dispatch(sendCartData(cartValue)); //not only action but an function which return a function 
    }
  }, [cartValue, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {uiDisplay && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
