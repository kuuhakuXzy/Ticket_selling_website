import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer>
      <div className="organizer-info">
        <h3 style={{ fontSize: '24px' }}>VIEWING PARTY TRẬN CHUNG KẾT TỔNG MSI 2025</h3>
        <p style={{ fontSize: '18px' }}> Trận Chung kết Tổng của giải đấu MSI 2025 đang gần kề! </p>
        <p style={{ fontSize: '18px' }}>
        Còn gì đỉnh hơn bằng việc tham dự bầu không khí thể thao điện tử sôi động dành cho người hâm mộ Liên Minh Huyền Thoại qua các buổi Viewing Party trực tiếp. Chuỗi sự kiện cho trận đấu đầy hấp dẫn này sẽ được thực hiện ở nhiều địa điểm tại TPHCM & Hà Nội.

        Các buổi Viewing Party sẽ bắt đầu đón khách từ 14h00 ngày 19/05/2025.
        </p>

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
            <b><span>Danh sách các địa điểm bao gồm:</span></b>
            <span style={{ marginLeft: '8px', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {isExpanded ? '▲' : '▼'}
            </span>
          </div>
          
          {isExpanded && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '18px' }}>- Hà Nội: Lotte Cinema West Lake, 683 đường Lạc Long Quân, Tây Hồ, Hà Nội</p>
              <p style={{ fontSize: '18px' }}>- Tp.HCM: Lotte Cinema Gò Vấp, 242 Nguyễn Văn Lượng, Q.Gò Vấp, TP. HCM </p>
              <p style={{ fontSize: '18px' }}>
              Khi đến tham dự buổi Viewing Party, ngoài việc được theo dõi trọn vẹn trận Chung kết Tổng MSI 2025, người hâm mộ cũng sẽ có nhiều cơ hội nhận được các món vật phẩm, phần thưởng giá trị của VCS cũng như giao lưu cùng những đội tuyển của VCS, KOLs và khách mời tại sự kiện. 
              </p>
              <p style={{ fontSize: '18px' }}>
              Hẹn gặp các bạn nhé!
              </p>
            </div>
          )}
        </div>
        {/* End of Collapsible Section */}
      </div>
    </footer>
  );
};

export default Footer;


