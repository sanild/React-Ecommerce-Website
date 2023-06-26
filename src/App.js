import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductHomePage from './pages/ProductHomePage';
import Home from './pages/Homepage';

function App() {
  return (
      <> 
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/producthomepage" element={<ProductHomePage/>}/>
        
        {/* <Route path="/productshomepage" component={HomePageProducts} /> */}
      </Routes>
    </Router>
      </>
  );
}

export default App;
