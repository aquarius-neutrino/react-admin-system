// 商品管理
import { useState } from 'react';

export default function Goods() {
  const [list] = useState([
    { id: 1, name: 'iPhone 15', price: '5999', stock: 120 },
    { id: 2, name: '华为 Mate 60', price: '6499', stock: 98 },
    { id: 3, name: '小米 14', price: '3999', stock: 205 },
  ]);

  return (
    <div className="table">
      <h3 style={{ marginBottom: 15 }}>商品列表</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>库存</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>¥{item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}