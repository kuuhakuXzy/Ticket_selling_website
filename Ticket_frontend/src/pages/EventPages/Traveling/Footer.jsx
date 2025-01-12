import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer>
      <div className="organizer-info">
        <h3 style={{ fontSize: '24px' }}>CHƯƠNG TRÌNH BIỂU DIỄN VÀO BAN ĐÊM "TRĂNG CHIẾN KHU"</h3>
        <p style={{ fontSize: '18px' }}>
        Nhằm đưa ra sản phẩm mới để thu hút và đáp ứng nhu cầu thăm quan ngày càng cao của du khách khi đến Khu di tích lịch sử địa đạo Củ Chi. Đồng thời giúp cho du khách hiểu được cuộc sống, sinh hoạt về đêm với khí thế cùng với sự lạc quan, tin tưởng, hăng hái tham gia phong trào cách mạng của người dân Củ Chi sống trong Vùng Giải phóng giai đoạn 1961 – 1964, đây là giai đoạn sau Đồng Khởi 1960, Mỹ ngụy tiến hành chiến lược “chiến tranh đặc biệt” đánh phá rất ác liệt do quân ngụy trực tiếp tác chiến với lực lượng cách mạng, còn quân Mỹ làm cố vấn. Qua đó góp phần giáo dục lòng yêu nước cho các thế hệ trẻ Việt Nam.
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
            <b><span>THÔNG TIN SỰ KIỆN</span></b>
            <span style={{ marginLeft: '8px', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {isExpanded ? '▲' : '▼'}
            </span>
          </div>
          
          {isExpanded && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '18px' }}>
              Chương trình tour thăm quan lấy ánh trăng làm chủ đạo, tái hiện lại cuộc sống, sinh hoạt về đêm của người dân Củ Chi sống trong vùng giải phóng với những hoạt động như: cảnh người dân tham gia đào địa đạo, đan lát dưới ánh trăng, cảnh thanh niên đăng ký tòng quân đánh giặc, xay lúa, giã gạo, trai gái hò đối đáp nhau trên đồng ruộng, họp chợ, cảnh văn công về biểu diễn phục vụ bộ đội, du kích và người dân hòa lẫn với tiếng bom, tiếng pháo, tiếng máy bay địch tuần tiễu… sẽ đưa du khách quay trở lại và hòa nhập vào cuộc sống của làng quê Củ Chi giai đoạn từ 1961 – 1964, hứa hẹn sẽ có những giây phút hồi hộp và những cảm nhận khó quên khi tham dự chương trình.  
              </p>
              <p style={{ fontSize: '18px' }}>
              Chương trình được diễn ra từ 18h00 đến 20h40 vào các ngày:
              </p>
              <p style={{ fontSize: '18px' }}>
              CÁC SUẤT DIỄN TRONG THÁNG 10/2024:
              </p>
              <p style={{ fontSize: '18px' }}>
              Ngày 11/10/2024.
              </p>
              <p style={{ fontSize: '18px' }}>
              Ngày 18/10/2024.
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


