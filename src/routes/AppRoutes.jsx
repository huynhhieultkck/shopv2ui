import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/client/HomePage';
import LoginPage from './pages/client/LoginPage';
import ProfilePage from './pages/client/ProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes cho Client */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Route được bảo vệ cho user */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Route>

        {/* Routes cho Admin */}
        <Route element={<ProtectedRoute adminOnly={true} />}>
            <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                {/* Các route admin khác */}
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// src/main.jsx
// Bọc AppRoutes trong AuthProvider
<React.StrictMode>
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
</React.StrictMode>