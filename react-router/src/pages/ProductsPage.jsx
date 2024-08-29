import { Link } from "react-router-dom";


export default function ProductsPage() {
  return (
    <div style={{padding: '20px', background: 'DarkOliveGreen',}}>
      <h1>My Products Page</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
      </ul>
      <h3>
        <Link to='/' >Return home</Link>

      </h3>
      </div>
  )
}
