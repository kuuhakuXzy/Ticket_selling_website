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
        <h3 style={{ fontSize: '24px' }}>CAO QUÂN BẢO ĐẠI CHIẾN DƯ HỒNG</h3>
        <p style={{ fontSize: '18px' }}>
        NHẬP MÃ ''GIAM10'' ĐỂ ĐƯỢC GIẢM 10% DỊP 20/10  
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
              <p style={{ fontSize: '18px' }}>Tác Giả Nguyễn Quang Nhã</p>
              <p style={{ fontSize: '18px' }}>Thời Gian Thứ Bảy - 20h00 - 21.12.2024</p>
              <p style={{ fontSize: '18px' }}>Địa Điểm Rạp Hồng Liên - Trung Tâm Giải Trí Hồng Liên</p>
              <b><p style={{ fontSize: '18px' }}>THÀNH PHẦN NGHỆ SĨ THAM GIA</p></b>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ Ưu Tú <strong>Trọng Nghĩa</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              HCV Trần Hữu Trang <strong>Lê Thanh Thảo</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              HCV Trần Hữu Trang <strong>Nhã Thi</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Ngôi sao sân khấu <strong>Xuân Trúc</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Ngôi sao sân khấu <strong>Chí Bảo</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Hoàng Chương</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Hoàng Khánh</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Mỹ Lệ</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Quỳnh Anh</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Sơn Minh</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Diệp Duy</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Diệp Duy</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Hồng Yến</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Hồng Quyên</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Thanh Hải</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nghệ Sĩ <strong>Tấn Đạt</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Vũ Đoàn <strong>Kim Long</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Võ Thuật <strong>Thiên Long</strong>
              </p>

              <b><p style={{ fontSize: '18px' }}>THÀNH PHẦN CHẾ TÁC CHƯƠNG TRÌNH</p></b>
              <p style={{ fontSize: '18px' }}>
              Nhà sản xuất <strong>Hoàng Khánh</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Biên tập <strong>Nam Vương - Quỳnh Anh</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Chỉ huy Đêm Diễn <strong>Võ Hoàng Phương</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nhạc Tân <strong>Thiên Long</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Nhạc Cổ <strong>Thiên Long</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Thư Kí <strong>Phương Phương - Tuyết Dung</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Hóa Trang <strong>Ngọc Nga - Hoàng Chương</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Thiết Kế Phục Trang <strong>Công Minh - Yến Phương</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Thiết Kế Sân Khấu <strong>Trường Lộc</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Thiết Kế LED <strong>Hà Lưu</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Photo <strong>Đồng Tường</strong>
              </p>
              <p style={{ fontSize: '18px' }}>
              Poster <strong>Nguyên Lộc</strong>
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


