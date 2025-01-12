import  { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer>
      <div className="organizer-info">
        <h3 style={{ fontSize: '24px' }}>TIẾT LỘ BẢN THIẾT KẾ CỦA CÁC TỔ CHỨC THEO ĐUỔI VÀ DẪN DẮT BỞI MỤC ĐÍCH CÓ Ý NGHĨA</h3>
        <p style={{ fontSize: '18px' }}>
        Mô đun thuộc Chuỗi chương trình “Thiết kế Tương lai Kiên cường chủ động”
        </p>
        <p style={{ fontSize: '18px' }}> Trong thế giới VUCA đầy biến động và không chắc chắn hiện nay, các CEO và nhà lãnh đạo tổ chức đang phải đối mặt với nhiều thách thức không có tiền lệ trong việc điều hành tổ chức hướng tới thành công lâu bền. Nhưng nếu có một khung sườn chiến lược được thiết kế đặc biệt để trang bị cho họ kiến thức cần thiết, không chỉ để tồn tại mà còn để chủ động phát triển mạnh mẽ giữa những biến động này, thì sao? Hãy cùng chúng tôi điều chỉnh góc nhìn lãnh đạo để tạo ra tác động và xây dựng tương lai của những tổ chức kiên cường. Cuộc hành trình bắt đầu từ đây. Câu hỏi là: bạn đã sẵn sàng bắt đầu chưa?</p>

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
            <b><span>TỔNG QUAN</span></b>
            <span style={{ marginLeft: '8px', transition: 'transform 0.3s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {isExpanded ? '▲' : '▼'}
            </span>
          </div>
          
          {isExpanded && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontSize: '18px' }}>Trong buổi trò chuyện bàn tròn kéo dài 2 giờ này, chúng tôi sẽ tiết lộ Bản thiết kế của các Tổ chức Theo đuổi và Dẫn dắt bởi Mục đích Có Ý Nghĩa. Chúng ta sẽ khám phá công thức "Thiết kế Tương lai Kiên cường chủ động" và phương pháp 3-Trạng thái của Consulus để xác định mục đích của tổ chức. Thông qua các nghiên cứu thực tế về các công ty đã thành công trong việc tích hợp "Mục đích có ý nghĩa" vào mô hình kinh doanh của họ, cùng với các cuộc trò chuyện mở, kết nối, và thảo luận nhóm, người tham dự sẽ hiểu rõ cách phát triển, thực thi và duy trì một tổ chức kiên định theo đuổi mục đích có ý nghĩa, đạt được sự cam kết trong toàn bộ tổ chức và tạo ra sự khác biệt trong thế giới. Mô đun kéo dài 2 giờ, đã bao gồm 30 phút nghỉ giữa giờ và thời gian giao lưu kết nối.</p>
              <p style={{ fontSize: '18px' }}>Trong thế giới VUCA đầy biến động và không chắc chắn hiện nay, các CEO và nhà lãnh đạo tổ chức đang phải đối mặt với nhiều thách thức không có tiền lệ trong việc điều hành tổ chức hướng tới thành công lâu bền. Nhưng nếu có một khung sườn chiến lược được thiết kế đặc biệt để trang bị cho họ kiến thức cần thiết, không chỉ để tồn tại mà còn để chủ động phát triển mạnh mẽ giữa những biến động này, thì sao? Hãy cùng chúng tôi điều chỉnh góc nhìn lãnh đạo để tạo ra tác động và xây dựng tương lai của những tổ chức kiên cường. Cuộc hành trình bắt đầu từ đây. Câu hỏi là: bạn đã sẵn sàng bắt đầu chưa?</p>
              <b><span>CÁC ĐIỂM NHẤN CHÍNH</span></b>
              <p style={{ fontSize: '18px' }}>• Người tham dự sẽ thành thạo 4 thành phần cấu thành nên ‘Vắc-xin Kiên cường” cho doanh nghiệp như một chìa khóa để chống đỡ với những gián đoạn trong cả hiện tại và tương lai.</p>
              <p style={{ fontSize: '18px' }}>• Người tham dự sẽ được khám phá mô hình 3-Trạng thái của Consulus để xác định mục đích có ý nghĩa cho tổ chức.</p>
              <p style={{ fontSize: '18px' }}>• Người tham dự sẽ có cơ hội giao lưu kết nối với các Nhà kiến tạo thay đổi</p>
              <b><span>MÔ ĐUN NÀY DÀNH CHO NHỮNG AI?</span></b>
              <p style={{ fontSize: '18px' }}>• Các chủ doanh nghiệp xã hội và doanh nghiệp nhỏ và vừa/ Các nhân sự quản lý cấp trung đang ở giai đoạn giữa sự nghiệp. Các nhân sự quản lý cấp cao của các tổ chức lớn đang tìm kiếm phương pháp thúc đẩy sự sáng tạo và nâng tầm ảnh hưởng của tổ chức thông qua mô hình kinh doanh dựa trên mục đích.</p>
              <p style={{ fontSize: '18px' }}>• Những nhà kiến tạo thay đổi muốn phát triển mô hình hoạt động dẫn dắt bởi mục đích có ý nghĩa và nắm vững nghệ thuật điều hành và lãnh đạo tổ chức qua mọi biến động và bất định trong môi trường kinh doanh.</p>
              <b><span>CÁC NHÀ LÃNH ĐẠO NÓI GÌ VỀ TRẢI NGHIỆM VỚI CONSULUS?</span></b>
              <p style={{ fontSize: '18px' }}>"Thật may mắn khi chúng tôi và Consulus đã xác định rõ một mục đích và mô hình kinh doanh mới để tái tạo ngành công nghiệp dành cho trẻ em tại ASEAN trước khi đại dịch COVID-19 diễn ra. Khi đại dịch bùng phát, tôi buộc phải tăng tốc kế hoạch này. Tôi may mắn khi có một đội ngũ xuất sắc, họ đã làm việc chăm chỉ ngày lẫn đêm để xoay trục kinh doanh từ phương thức triển lãm truyền thống sang cả thương mại điện tử và bán lẻ cùng một lúc. Đó là một giai đoạn căng thẳng nhưng hiện tại mô hình kinh doanh của chúng tôi đã trở nên 'kiên cường' hơn rất nhiều”,</p>
              <b><p style={{ fontSize: '18px' }}>William Chin, Nhà sáng lập, Giám đốc Điều hành, Mummys Market.</p></b>
            </div>
          )}
        </div>
        {/* End of Collapsible Section */}
      </div>
    </footer>
  );
};

export default Footer;


