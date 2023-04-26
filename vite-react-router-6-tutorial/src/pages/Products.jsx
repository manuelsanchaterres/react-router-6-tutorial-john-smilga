import products from "../data";
import {Link} from 'react-router-dom';

const Products = () => {
  return (

    <section className='section'>

      <h2>products</h2>

      <div className="products">    
        
        {products.map((product) => {

          return <article key={product.id} className='section product'>

              <h5>{product.name}</h5>
              <img src={product.image} alt={product.name} />
              <Link to={`/products/${product.id}`} style={{display:'block', justifyContent:'flex-end'}}>more info</Link>
            
            
            </article>

        })}

      </div>

    </section>

  );
};

export default Products;
