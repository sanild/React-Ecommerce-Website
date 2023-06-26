import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Product from "../components/ProductList"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductHomePage from './ProductHomePage';

function Homepage() {
    return (
      <> 
        <Navbar />
        <Header />
        <Main />
        {/* <Product /> */}
        <Footer />
        </>
    );
  }
  
  export default Homepage;