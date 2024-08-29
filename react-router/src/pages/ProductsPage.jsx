import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Product 4" },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: "20px", background: "DarkOliveGreen" }}>
      <h1>My Products Page</h1>
      <ul>
        {PRODUCTS.map(product=><li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>)}
      </ul>
      <h3>
        <Link to="/">Return home</Link>
      </h3>
    </div>
  );
}
