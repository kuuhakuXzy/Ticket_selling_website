import './TicketSection.css';

const TicketSection = () => {
  return (
    <section className="ticket-section">
      <h2>Thông tin vé</h2>
      <ul>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>TRĂNG CHIẾN KHU</h3>
            <span className="price">399.000 đ</span>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;
