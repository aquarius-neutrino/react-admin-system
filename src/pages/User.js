// 用户管理
import { useState } from 'react';

export default function User() {
  const [list] = useState([
    { id: 1, name: '张三', phone: '13800138000', status: '正常' },
    { id: 2, name: '李四', phone: '13900139000', status: '正常' },
    { id: 3, name: '王五', phone: '13700137000', status: '禁用' },
  ]);

  return (
    <div className="table">
      <h3 style={{ marginBottom: 15 }}>用户列表</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}