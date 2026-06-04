export default function Home() {
  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>数据看板</h2>
      <div className="card-box">
        <div className="card">
          <h4>用户总数</h4>
          <div className="num">12,345</div>
        </div>
        <div className="card">
          <h4>商品总数</h4>
          <div className="num">890</div>
        </div>
        <div className="card">
          <h4>订单总数</h4>
          <div className="num">5,678</div>
        </div>
        <div className="card">
          <h4>今日营收</h4>
          <div className="num">¥ 12,600</div>
        </div>
      </div>
    </div>
  );
}