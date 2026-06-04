// 登录页
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (!username || !password) {
      alert('请输入账号密码');
      return;
    }
    localStorage.setItem('adminToken', 'ok');
    navigate('/');
  };

  return (
    <div className="login-box">
      <div className="login-form">
        <h2>后台管理系统</h2>
        <input
          placeholder="账号"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="密码"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>登录</button>
      </div>
    </div>
  );
}