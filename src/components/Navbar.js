import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ProductHomePage from '../pages/ProductHomePage';


function Navbar() {

  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });

  function openBar() {
    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }





  return (
    <nav className="navbar">

      <div className="container">

        <div className="row">

          <h1 className="logo">

            <Link
                      to="/"
                      
            >
              
              Shopping
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="/ProductHomePage"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="/"
                
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="/"
                
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* <Routes>

          <Route exact path="/producthomepage"
            element={<ProductHomePage/>}>
          
          </Route>

        </Routes> */}


          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
