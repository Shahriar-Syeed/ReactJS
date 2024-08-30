import { Link, useParams } from "react-router-dom";


export default function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h2>ProductDetailPage</h2>
      <h3>{params.productId}</h3>
      <Link to='..' relative="path">Back</Link>
    </>
  );
}
