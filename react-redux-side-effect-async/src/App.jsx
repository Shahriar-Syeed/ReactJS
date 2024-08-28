import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Cart from './components/Cart/Cart.jsx';
import Products from './components/Shop/Products.jsx'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const uiDisplay = useSelector(state => state.ui.cartIsVisible);
  const cartValue = useSelector(state => state.cart);

  useEffect(()=> {
    fetch('https://react-redux-cb271-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
      method:'PUT', body: JSON.stringify(cartValue),
    });

  }, [cartValue]);
  return (
    <>
      <Layout>
        {uiDisplay && <Cart/>}
        <Products/>
      </Layout>
    </>
  )
}

export default App
