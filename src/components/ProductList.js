import React from "react";
import Card from "./Card";
import card1 from "../assets/card1.png";
import ProductService from "../services/productService";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <>
      <div>
        <h2>Product List</h2>
        <div className="product-list">
      
    </div>

        {console.log(data)}
      </div>
    </>
  );
}

function ProductListContainer(){
  return(
    <ProductService>
        {(data) => <ProductList data={data} />}
      </ProductService>
  );
}

export default ProductListContainer;
