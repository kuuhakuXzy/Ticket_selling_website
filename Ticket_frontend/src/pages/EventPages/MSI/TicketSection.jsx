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
            <h3>Hạng vé GA </h3>
            <span className="price">129.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.earlyBird ? 'active' : ''}`}>
            <p>Quà tặng bao gồm: - Nước tăng lực Monster Energy - Vòng tay limited MSI 2025 - Vòng tay Monster Energy - Poster MSI 2025 - Quà khác từ nhà tài trợ VCS, Monster hoặc LogitechG. </p>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header" onClick={() => toggleExpand('official')}>
            <span className={`arrow ${isExpanded.official ? 'down' : ''}`}>&#9654;</span>
            <h3>HẠNG VÉ VIP</h3>
            <span className="price">469.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.official ? 'active' : ''}`}>
            <p>Quà tặng bao gồm: - Áo Jersey MSI 2025 GAMxDirtyCoins - Nước tăng lực Monster Energy - Vòng tay limited MSI 2025 - Vòng tay Monster Energy - Poster MSI 2025 - Quà khác từ nhà tài trợ VCS, Monster hoặc LogitechG. </p>
          </div>
        </li>
        <li className="ticket-item">
          <div className="ticket-header" onClick={() => toggleExpand('combo')}>
            <span className={`arrow ${isExpanded.combo ? 'down' : ''}`}>&#9654;</span>
            <h3>HẠNG VÉ VVIP</h3>
            <span className="price">699.000 đ</span>
          </div>
          <div className={`ticket-content ${isExpanded.combo ? 'active' : ''}`}>
            <p>Quà tặng bao gồm: - Áo khoác GAMxDirtyCoins - Nước tăng lực Monster Energy - Vòng tay limited MSI 2025 - Vòng tay Monster Energy - Poster MSI 2025 - Quà khác từ nhà tài trợ VCS, Monster hoặc LogitechG.</p>
          </div>
        </li>
      </ul>
      <button className="buy-now">Mua vé ngay</button>
    </section>
  );
};

export default TicketSection;
