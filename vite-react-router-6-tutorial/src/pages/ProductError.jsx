import { Link } from 'react-router-dom';

const ProductError = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>product not found</p>
      <Link to="/products" className='btn'>back products</Link>

    </section>
  );
};
export default ProductError;
