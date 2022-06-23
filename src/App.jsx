import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RedirectRole, UserRole, AdminRole } from "./pages/RouteGuard";
import Home from "./pages/UserScreen/Home";
import Checkout from "./pages/UserScreen/Checkout";
import ProductDetail from "./pages/UserScreen/ProductDetail";
import ShoppingCart from "./pages/UserScreen/ShoppingCart";
import UserDetail from "./pages/UserScreen/UserDetail";
import OrderDetail from "./pages/AdminScreen/OrderDetail";
import OrderList from "./pages/AdminScreen/OrderList";
import ProductCreate from "./pages/AdminScreen/ProductCreate";
import ProductEdit from "./pages/AdminScreen/ProductEdit";
import ProductList from "./pages/AdminScreen/ProductList";
import UserCreate from "./pages/AdminScreen/UserCreate";
import UserDetailByAdmin from "./pages/AdminScreen/UserDetail";
import UserEdit from "./pages/AdminScreen/UserEdit";
import UserList from "./pages/AdminScreen/UserList";

import Forgot from "./components/Forgot";
import Login from "./components/Login";
import Register from "./components/Register";
import Verify from "./components/Verify";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route element={RedirectRole}> */}
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            {/* </Route> */}
          </Route>

          <Route element={UserRole}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/user-detail" element={<UserDetail />} />
          </Route>

          <Route element={AdminRole}>
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/product-create" element={<ProductCreate />} />
            <Route path="/product-edit" element={<ProductEdit />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/user-create" element={<UserCreate />} />
            <Route
              path="/user-detail-by-admin"
              element={<UserDetailByAdmin />}
            />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-edit" element={<UserEdit />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
