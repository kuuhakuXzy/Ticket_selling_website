import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Business.jpg';

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>Tiết lộ bản thiết kế của các tổ chức theo đuổi & dẫn dắt bởi mục đích có ý nghĩa</h1>
      <p><i className="fas fa-calendar-alt"></i> 14:00 - 16:00, 24 tháng 10, 2024 </p> 
      <p><i className="fas fa-location-dot"></i> Trung Nguyên Legend Café</p> 
      <p>12 Alexandre De Rhodes, Ho Chi Minh City</p>
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>2.300.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;