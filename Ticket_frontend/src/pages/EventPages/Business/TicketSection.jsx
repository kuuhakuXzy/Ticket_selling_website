import './TicketSection.css';

const TicketSection = () => {
  return (
    <section className="ticket-section">
      <h2>Thông tin vé</h2>
      <ul>
        <li className="ticket-item">
          <div className="ticket-header">
            <h3>Vé tham dự</h3>
            <span className="price">2.300.000 đ</span>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;