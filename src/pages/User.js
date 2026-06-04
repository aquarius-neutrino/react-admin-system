import { useState, useEffect } from 'react';

export default function User() {
  // 用户列表
  const [list, setList] = useState([]);
  // 表单
  const [form, setForm] = useState({ name: '', phone: '' });
  const [editId, setEditId] = useState(null);
  // 搜索关键词
  const [keyword, setKeyword] = useState('');

  // 初始化本地数据
  useEffect(() => {
    const local = localStorage.getItem('userList');
    if (local) {
      setList(JSON.parse(local));
    } else {
      const initList = [
        { id: 1, name: '张三', phone: '13800138000' },
        { id: 2, name: '李四', phone: '13900139000' },
        { id: 3, name: '王五', phone: '13700137000' },
      ];
      setList(initList);
      localStorage.setItem('userList', JSON.stringify(initList));
    }
  }, []);

  // 保存到本地
  const saveLocal = (newList) => {
    localStorage.setItem('userList', JSON.stringify(newList));
    setList(newList);
  };

  // 保存 / 修改
  const save = () => {
    if (!form.name || !form.phone) {
      alert('请填写完整信息');
      return;
    }

    let newList;
    if (editId) {
      newList = list.map((item) =>
        item.id === editId ? { ...item, ...form } : item
      );
      setEditId(null);
    } else {
      newList = [...list, { id: Date.now(), ...form }];
    }

    saveLocal(newList);
    setForm({ name: '', phone: '' });
  };

  // 删除
  const del = (id) => {
    if (!window.confirm('确定要删除吗？')) return;
    const newList = list.filter((item) => item.id !== id);
    saveLocal(newList);
  };

  // ================== 搜索核心 ==================
  const filterList = list.filter((item) => {
    return item.name.includes(keyword);
  });

  return (
    <div className="table">
      <h3>用户管理</h3>

      {/* 搜索框 */}
      <input
        type="text"
        placeholder="搜索姓名"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 10, padding: 6, width: '100%' }}
      />

      {/* 新增/编辑表单 */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <input
          placeholder="姓名"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="电话"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button onClick={save}>{editId ? '修改' : '新增'}</button>
      </div>

      {/* 表格 */}
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filterList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>
                <button
                  onClick={() => {
                    setEditId(item.id);
                    setForm(item);
                  }}
                >
                  编辑
                </button>
                <button onClick={() => del(item.id)}>删除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}