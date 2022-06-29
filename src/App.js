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
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import OrderList from './pages/Orders/OrderList/OrderList';
import OrderDetail from './pages/Orders/OrderDetail/OrderDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} >
          <Route path="order-detail" element={<OrderDetail />} />
          <Route path="order-list" element={<OrderList />} />
        </Route>
        <Route path="/products/:categoryName/:page" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
