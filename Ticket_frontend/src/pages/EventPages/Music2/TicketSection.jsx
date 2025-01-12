import './TicketSection.css';

const TicketSection = () => {
  return (
    <section className="ticket-section">
      <h2>Thông tin vé</h2>
      <ul>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>NHÁ NHEM</h3>
            <span className="price">500.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>CHẬP CHOẠNG</h3>
            <span className="price">650.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>CHẠNG VẠNG</h3>
            <span className="price">900.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>CHIỀU TÀ</h3>
            <span className="price">1.200.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>HOÀNG HÔN</h3>
            <span className="price">1.500.000 đ</span>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;
