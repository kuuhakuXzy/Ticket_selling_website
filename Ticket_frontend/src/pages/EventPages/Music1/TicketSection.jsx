import { useState } from 'react';
import './TicketSection.css';

const TicketSection = () => {
  const [isExpanded, setIsExpanded] = useState({
    earlyBird: false,
    official: false,
    combo: false,
  });

  const toggleExpand = (ticket) => {
    setIsExpanded((prev) => ({
      ...prev,
      [ticket]: !prev[ticket],
    }));
  };

  return (
    <section className="ticket-section">
      <h2>Thông tin vé</h2>
      <ul>
        <li className="ticket-item">
          <div className="ticket-header" onClick={() => toggleExpand('earlyBird')}>
            <span className={`arrow ${isExpanded.earlyBird ? 'down' : ''}`}>&#9654;</span>
            <h3>Early Bird Ticket</h3>
            <span className="price">599.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.earlyBird ? 'active' : ''}`}>
            <p>Khán giả tự do chọn vị trí đứng trong khu vực sự kiện. Check-in sớm sẽ ưu tiên về vị trí đứng gần sân khấu, tầm nhìn thuận lợi. Hỗ trợ LED Live cam để theo dõi toàn bộ sự kiện.</p>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header" onClick={() => toggleExpand('official')}>
            <span className={`arrow ${isExpanded.official ? 'down' : ''}`}>&#9654;</span>
            <h3>Official Ticket</h3>
            <span className="price">699.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.official ? 'active' : ''}`}>
            <p>Khán giả tự do chọn vị trí đứng trong khu vực sự kiện. Check-in sớm sẽ ưu tiên về vị trí đứng gần sân khấu, tầm nhìn thuận lợi. Hỗ trợ LED Live cam để theo dõi toàn bộ sự kiện.</p>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header" onClick={() => toggleExpand('combo')}>
            <span className={`arrow ${isExpanded.combo ? 'down' : ''}`}>&#9654;</span>
            <h3>Combo: Official Ticket + Lightstick</h3>
            <span className="price">1.048.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.combo ? 'active' : ''}`}>
            <p>1 Combo bao gồm (1 vé Official Ticket + 1 Lightstick NTPMM - Lightstick được ship riêng tới địa chỉ của người mua). Khán giả tự do chọn vị trí đứng trong khu vực sự kiện. Check-in sớm sẽ ưu tiên về vị trí đứng gần sân khấu, tầm nhìn thuận lợi. Hỗ trợ LED Live cam để theo dõi toàn bộ sự kiện.</p>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;
