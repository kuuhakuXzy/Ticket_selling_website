import './TicketSection.css';

const TicketSection = () => {
  return (
    <section className="ticket-section">
      <h2>Thông tin vé</h2>
      <ul>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>THƯỜNG</h3>
            <span className="price">400.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>ĐỒNG</h3>
            <span className="price">600.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>BẠC</h3>
            <span className="price">800.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>VÀNG</h3>
            <span className="price">1.000.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>RUBY</h3>
            <span className="price">1.200.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>VIP</h3>
            <span className="price">1.400.000 đ</span>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>ĐÀO KÉP</h3>
            <span className="price">1.500.000 đ</span>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;
