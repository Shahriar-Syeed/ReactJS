
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


// https://example.com

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      {path: '/', element: <HomePage /> },
      {path: '/products', element: <ProductsPage /> },
    ],
  },
  
]);

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
