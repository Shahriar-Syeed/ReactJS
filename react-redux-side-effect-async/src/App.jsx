import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Cart from './components/Cart/Cart.jsx';
import Products from './components/Shop/Products.jsx'
import { useSelector } from 'react-redux';

function App() {
  const uiDisplay = useSelector(state => state.ui.cartIsVisible);
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
