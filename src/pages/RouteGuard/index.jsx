import { Navigate, Outlet } from "react-router-dom";

export const RedirectRole = ({ role, accessToken, isEmailVerified }) => {
  if (accessToken && role === "user" && isEmailVerified) {
    return <Navigate to="/logged" />;
  }
  if (accessToken && role === "admin") {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
};

export const UserRole = ({ role, accessToken }) => {
  if (!accessToken || (accessToken && role === "admin")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const AdminRole = ({ role, accessToken }) => {
  if (!accessToken || (accessToken && role !== "admin")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
