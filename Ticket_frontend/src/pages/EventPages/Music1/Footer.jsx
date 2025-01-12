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
        <h3 style={{ fontSize: '24px' }}>Những Thành Phố Mơ Màng Year End 2024</h3>
        <p style={{ fontSize: '18px' }}>
          Mùa lễ hội đã đến gần, và Những Thành Phố Mơ Màng rất vinh hạnh được mời cư dân lên chuyến tàu để khám phá một thế giới âm nhạc mới mẻ. Hãy để những bộn bề lo toan và những nỗi lo lắng của năm qua lùi lại phía sau, và hòa mình vào không gian đầy niềm vui, sự hạnh phúc và âm nhạc. Cùng tận hưởng những khoảnh khắc tuyệt vời bên cạnh người thân yêu trong một mùa lễ hội ấm áp và tràn đầy cảm xúc nhé!
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
              <p style={{ fontSize: '18px' }}>Thời gian dự kiến: 15:00 - 22:30 | 30/11/2024</p>
              <p style={{ fontSize: '18px' }}>Địa điểm: Đà Nẵng (khu vực ngoài trời)</p>
              <b><p style={{ fontSize: '18px' }}>QUY ĐỊNH CHUNG CỦA SỰ KIỆN</p></b>
              <p style={{ fontSize: '18px' }}>
                Điều 1. Chương trình dành cho đối tượng khán giả trên 16 tuổi. Khán giả từ 10-15 tuổi tham gia chương trình phải có người giám hộ đi kèm (người giám hộ phải từ 18 tuổi trở lên, một người giám hộ kèm một trẻ vị thành niên) để quản lý và chịu hoàn toàn trách nhiệm nếu có bất kỳ sự cố nào xảy ra trong sự kiện.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 2. Phụ nữ mang thai và người có vấn đề về sức khoẻ tự cân nhắc khi tham gia chương trình. Trong trường hợp có vấn đề xảy ra, BTC không chịu trách nhiệm.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 3. Mỗi vé chỉ dành cho một khán giả tham dự, không kèm trẻ em và trẻ vị thành niên. Người giám hộ đi kèm theo khán giả vị thành niên phải mua vé để tham dự.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 4. Vé đã mua không được đổi hoặc hoàn trả dưới mọi hình thức. Khán giả có trách nhiệm tự bảo quản, bảo mật thông tin mã vé của mình. BTC từ chối giải quyết trường hợp có nhiều hơn một người check-in cùng một mã vé. Theo quy định, BTC cho phép người check-in đầu tiên mã vé bị trùng được tham dự sự kiện.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 5. Hãy kiểm tra kỹ thông tin trước khi đặt vé, BTC không hỗ trợ đổi chặng hay hoàn tiền đối với những trường hợp đặt nhầm chặng/hạng vé.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 6. Vui lòng không mua vé từ bất kỳ nguồn nào khác ngoài Ticketbox tránh trường hợp vé giả hoặc lừa đảo. BTC từ chối giải quyết cho những trường hợp mua vé từ nguồn khác nếu có vấn đề hay tranh chấp xảy ra.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 7. Khi tham gia chương trình, khán giả đồng ý với việc hình ảnh của mình được sử dụng để khai thác cho sản phẩm ghi hình, thu âm, quảng bá cho chương trình.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 8. BTC có quyền kiểm tra giấy tờ tùy thân của khán giả nếu có nghi ngờ về độ tuổi không phù hợp và từ chối quyền tham gia của bất kì khán giả nào không tuân thủ quy định của chương trình mà không hoàn trả vé.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 9. BTC có thể hoãn, hủy hoặc tạm ngưng sự kiện do vấn đề bất lợi về thời tiết, tình huống khẩn cấp hoặc nguy hiểm (trường hợp bất khả kháng hoặc nằm ngoài tầm kiểm soát của BTC). Trong trường hợp như trên, phương án đảm bảo quyền lợi cho khán giả đã mua vé sẽ được thực hiện theo quyết định của BTC.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 10. Khán giả tham dự sự kiện phải tự ý thức và có trách nhiệm bảo vệ sức khoẻ của bản thân khi tham gia. Khi tham gia show đồng nghĩa với việc khán giả đã cân nhắc về các vấn đề bao gồm điều kiện thời tiết bất lợi trước, trong hoặc sau sự kiện, các rủi ro từ tình trạng sức khỏe hiện có hoặc trong quá trình di chuyển đi và đến từ địa điểm.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 11. Trong mọi trường hợp, quyết định của BTC là quyết định cuối cùng.
              </p>
              <p style={{ fontSize: '18px' }}>
                Điều 12. Vui lòng theo dõi thêm và tuân thủ các quy định cũng như những đồ dùng bị cấm mang sẽ được đăng tải tại trang Facebook của chương trình trước khi chương trình được diễn ra.
              </p>
              <p style={{ fontSize: '18px' }}>
                Mọi vấn đề liên quan đến vé sự kiện cần hỗ trợ, bạn vui lòng liên hệ tổng đài của Ticketbox theo số hotline 1900 6408.
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


