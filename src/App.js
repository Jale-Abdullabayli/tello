import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Products from './pages/Products/ProductsByCategory';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Basket from './pages/Basket/Basket';
import './App.scss';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:categoryName/:page" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
