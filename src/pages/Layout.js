// 布局（侧边栏➕顶部）
import { useEffect } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/login');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h3>管理系统</h3>
        <ul>
          <li><Link to="/">数据看板</Link></li>
          <li><Link to="/user">用户管理</Link></li>
          <li><Link to="/goods">商品管理</Link></li>
        </ul>
      </div>
      <div className="main">
        <div className="header">
          <button onClick={logout}>退出登录</button>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}