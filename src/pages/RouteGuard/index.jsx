import { Navigate, Outlet } from "react-router-dom";

export const RedirectRole = ({ role, accessToken }) => {
  if (accessToken && role === "user") {
    return <Navigate to="/" />;
  }
  if (accessToken && role === "admin") {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
};

export const UserRole = ({ role, accessToken }) => {
  if (!accessToken || (accessToken && role === "admin")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export const AdminRole = ({ role, accessToken }) => {
  if (!accessToken || (accessToken && role !== "admin")) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
 