// src/routes/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ adminOnly = false }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    // Nếu route yêu cầu admin mà user không phải admin, chuyển hướng về trang chủ
    return <Navigate to="/" />;
  }

  return <Outlet />; // Cho phép truy cập
};

export default ProtectedRoute;