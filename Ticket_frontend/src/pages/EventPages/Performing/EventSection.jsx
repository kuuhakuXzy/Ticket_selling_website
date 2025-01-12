import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Performing.jpg';

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>SÂN KHẤU THIÊN LONG - CAO QUÂN BẢO ĐẠI CHIẾN DƯ HỒNG - LƯU KIM ĐÍNH - RẠP HỒNG LIÊN</h1>
      <p><i className="fas fa-calendar-alt"></i> 20:00 - 23:00, 21 tháng 12, 2024 </p> 
      <p><i className="fas fa-location-dot"></i> Rạp Hồng Liên - Trung Tâm Giải Trí Hồng Liên</p> 
      <p>259 Hậu Giang , 5 Ward, 6 District, Ho Chi Minh City</p>
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>400.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;