import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RedirectRole, UserRole, AdminRole } from "./pages/RouteGuard";
import Navigation from "./pages/UserScreen/Navigation";
import Home from "./pages/UserScreen/Home";
import Checkout from "./pages/UserScreen/Checkout";
import ProductDetail from "./pages/UserScreen/ProductDetail";
import ShoppingCart from "./pages/UserScreen/ShoppingCart";
import UserDetail from "./pages/UserScreen/UserDetail";

import Admin from "./pages/AdminScreen/Admin";
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
import MyProfile from "./components/MyProfile";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <Router>
      <div className="app" style={{ width: "100%", height: "100%" }}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/* <Route element={RedirectRole}> */}
            <Route index element={<Home />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            {/* </Route> */}

            {/* <Route element={UserRole}> */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/user-detail" element={<UserDetail />}>
              <Route path="/user-detail/my-profile" element={<MyProfile />} />
              <Route
                path="/user-detail/order-history"
                element={<OrderHistory />}
              />
            </Route>
            {/* </Route> */}
          </Route>

          {/* <Route element={AdminRole}> */}
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/order-detail" element={<OrderDetail />} />
            <Route path="/admin/order-list" element={<OrderList />} />
            <Route path="/admin/product-create" element={<ProductCreate />} />
            <Route path="/admin/product-edit" element={<ProductEdit />} />
            <Route path="/admin/product-list" element={<ProductList />} />
            <Route path="/admin/user-create" element={<UserCreate />} />
            <Route
              path="/admin/user-detail-by-admin"
              element={<UserDetailByAdmin />}
            />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/user-edit" element={<UserEdit />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
