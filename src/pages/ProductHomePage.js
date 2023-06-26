import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import Products from "../components/ProductList"
import newcard from "../components/NewProductCard"

function ProductHomePage() {
  return (
    <>
      <Navbar />
      <Products />
      <newcard/>
      <Footer />
    </>
  );
}

export default ProductHomePage;
