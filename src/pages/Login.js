import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// 连接后端接口的工具函数
import request from '../utils/request'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // 真实登录
  const login = async () => {
    try {
        // 后端接口暂未实现，这里先模拟一个成功的登录结果
    //   const res = await request.post('/admin/login', {
    //     username,
    //     password
    //   })
    if (username === 'admin' && password === '123456') {
       localStorage.setItem('adminToken', 'ok');
      // 保存 token, 以后接口请求会自动带上，代表已登录状态
      //   localStorage.setItem('adminToken', res.token)
      alert('登录成功')
      navigate('/')
    }
    } catch (err) {
      alert('账号或密码错误')
    }
  }

  return (
    <div className="login-box">
      <div className="login-form">
        <h2>后台管理系统</h2>
        <input
          placeholder="账号：admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="密码：123456"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>登录</button>
      </div>
    </div>
  )
}