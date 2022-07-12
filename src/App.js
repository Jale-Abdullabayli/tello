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
import { useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';
import Profile from './pages/Profile/Profile';
import OrderList from './pages/Profile/Orders/OrderList/OrderList';
import OrderDetail from './pages/Profile/Orders/OrderDetail/OrderDetail';
import GenerateToken from './pages/GenerateToken/GenerateToken';
import UserInfo from './pages/Profile/UserInfo/UserInfo';
import { commerce } from './commerce';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(commerce.customer.isLoggedIn());

  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} >
          <Route path="order-detail" element={<OrderDetail />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="user-info" element={<UserInfo />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/generate-token/:token" element={<GenerateToken />} />
        <Route path="/products/:categoryName/:page" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
