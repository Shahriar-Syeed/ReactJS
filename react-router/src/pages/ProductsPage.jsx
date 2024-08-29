import { Link } from "react-router-dom";


export default function ProductsPage() {
  return (
    <div style={{padding: '20px', background: 'skyblue',}}>
      <h1>My Products Page</h1>
      <h3>
        <Link to='/' >Return home</Link>

      </h3>
      </div>
  )
}
