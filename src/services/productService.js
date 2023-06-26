import React, { useEffect, useState } from 'react';
import ProductCard from "../components/ProductCard";

function ProductService() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        console.log(data); // Optional: Log the data to the console
      })
      .catch(error => {
        // Handle error if needed
        console.error('Error fetching data:', error);
      });
  }, []);

  return (


    <div className="product-list">
      {products.map((products) => (
        <ProductCard
          productId={products.id}
          image={products.image}
          title={products.title}
          price={products.price}
        />
      ))}
    </div>


    // <div>
    //   {/* {products} */}
    //   {products.length > 0 ? (
    //     products.map(product => (
    //       <div key={product.id}>
    //         <h3>{product.title}</h3>
    //         <p>{product.description}</p>
    //         <p>Price: {product.price}</p>
    //         <p>Category: {product.category}</p>
    //         <img src={product.image} alt={product.title} />
    //       </div>
    //     ))
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
  );
}

export default ProductService;