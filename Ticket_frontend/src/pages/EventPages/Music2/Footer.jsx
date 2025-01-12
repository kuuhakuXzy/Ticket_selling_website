import React, { useState } from 'react';
import './Footer.css';
import eventImage1 from './Music21.jpg';
import eventImage2 from './Music22.jpg';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer>
      <div className="organizer-info">
        <h3 style={{ fontSize: '24px' }}>Những Thành Phố Mơ Màng Year End 2024</h3>
        <p style={{ fontSize: '18px' }}>
        Lululola Show - Hơn cả âm nhạc, không gian lãng mạn đậm chất thơ Đà Lạt bao trọn hình ảnh thung lũng Đà Lạt, được ngắm nhìn khoảng khắc hoàng hôn thơ mộng đến khi Đà Lạt về đêm siêu lãng mạn, được giao lưu với thần tượng một cách chân thật và gần gũi nhất trong không gian ấm áp và không khí se lạnh của Đà Lạt. Tất cả sẽ  mang đến một đêm nhạc ấn tượng mà bạn không thể quên khi đến với Đà Lạt. 
        </p>
        <b><p>Qúy Khách sẽ được Lululola gửi thông tin số ghế và xác nhận đặt chỗ thành công! </p></b>

        {/* Collapsible Section */}
        <div>
          <div 
            onClick={toggleText} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              fontSize: '18px',
              userSelect: 'none' // Prevent text selection on double-click
            }}
          >
            <b><span>THÔNG TIN SÂN KHẤU</span></b>
            <span style={{ marginLeft: '8px', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {isExpanded ? '▲' : '▼'}
            </span>
          </div>
          
          {isExpanded && (
            <div style={{ marginTop: '10px' }}>
              <img 
                src={eventImage1} 
                alt="Event Image 1" 
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }} 
              />
              <img 
                src={eventImage2} 
                alt="Event Image 2" 
                style={{ width: '100%', height: 'auto' }} 
              />
            </div>
          )}
        </div>
        {/* End of Collapsible Section */}
      </div>
    </footer>
  );
};

export default Footer;
