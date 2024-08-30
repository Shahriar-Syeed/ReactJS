
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import RootLayout from './pages/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';


// https://example.com

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement:<ErrorPage />,
//     children: [
//       {path: '/', element: <HomePage /> },
//       {path: '/products', element: <ProductsPage /> },
//       {path: '/products/:productId', element: <ProductDetailPage /> },
//     ],
//   },
  
// ]);
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      {index:true, element: <HomePage /> }, //path: ''
      {path: 'products', element: <ProductsPage /> },
      {path: 'products/:productId', element: <ProductDetailPage /> },
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
