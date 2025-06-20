// src/layouts/MainLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function MainLayout() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Link to="/" className="text-xl font-bold">ShopV2</Link>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Chào, {user.name}</span>
              <button onClick={logout} className="px-3 py-1 bg-red-600 rounded hover:bg-red-700">
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-700">
              Đăng nhập
            </Link>
          )}
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}