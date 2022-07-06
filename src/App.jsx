import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";

import tokenExpried from "./api/tokenExpired";

import { RedirectRole, UserRole, AdminRole } from "./pages/RouteGuard";

import Home from "./pages/UserScreen/Home";
import Checkout from "./pages/UserScreen/Checkout";
import ProductDetail from "./pages/UserScreen/ProductDetail";
import ShoppingCart from "./pages/UserScreen/ShoppingCart";
import UserDetail from "./pages/UserScreen/UserDetail";
import HomeLogin from "./pages/UserScreen/HomeLogin";
import HomeRegister from "./pages/UserScreen/HomeRegister";
import HomeForgot from "./pages/UserScreen/HomeForgot";
import HomeVerify from "./pages/UserScreen/HomeVerify";
import HomeLogged from "./pages/UserScreen/HomeLogged";
import ProductsByCategory from "./pages/UserScreen/ProductsByCategory";
import ProductsBySearch from "./pages/UserScreen/ProductsBySearch";

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

import MyProfile from "./components/MyProfile";
import OrderHistory from "./components/OrderHistory";

import {
  selectRole,
  selectAccessToken,
  selectLoading,
  selectIsEmailVerified,
  selectRefreshToken,
  selectDeviceId,
} from "./redux/auth/selector";

import { refresh } from "./redux/auth/action";

function App() {
  const role = useSelector(selectRole);
  const accessToken = useSelector(selectAccessToken);
  const loading = useSelector(selectLoading);
  const isEmailVerified = useSelector(selectIsEmailVerified);
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken && refreshToken) {
      tokenExpried(accessToken, () => {
        dispatch(refresh(refreshToken, deviceId));
      });
    }
  }, [accessToken, refreshToken]);

  return (
    <Router>
      <Spin spinning={loading}>
        <div className="app" style={{ width: "100%", height: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              element={
                <RedirectRole
                  accessToken={accessToken}
                  role={role}
                  isEmailVerified={isEmailVerified}
                />
              }
            >
              <Route path="/login" element={<HomeLogin />} />
              <Route path="/register" element={<HomeRegister />} />
              <Route path="/forgot" element={<HomeForgot />} />
              <Route path="/verify" element={<HomeVerify />} />
            </Route>

            <Route element={<UserRole accessToken={accessToken} role={role} />}>
              <Route path="/logged" element={<HomeLogged />} />
              <Route
                path="/products-by-category"
                element={<ProductsByCategory />}
              />
              <Route
                path="/products-by-search"
                element={<ProductsBySearch />}
              />
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
            </Route>

            <Route
              element={<AdminRole accessToken={accessToken} role={role} />}
            >
              <Route path="/admin" element={<Admin />}>
                <Route path="/admin/order-detail" element={<OrderDetail />} />
                <Route path="/admin/order-list" element={<OrderList />} />
                <Route
                  path="/admin/product-create"
                  element={<ProductCreate />}
                />
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
            </Route>
          </Routes>
        </div>
      </Spin>
    </Router>
  );
}

export default App;
