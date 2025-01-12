import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Traveling1.jpg';

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>Địa Đạo Củ Chi : Trăng Chiến Khu</h1>
      <p><i className="fas fa-calendar-alt"></i> 18:00 - 20:30, 26 tháng 10, 2024 </p> 
      <p><i className="fas fa-location-dot"></i> Địa đạo Củ Chi</p> 
      <p>Địa chỉ: Ấp Phú Hiệp, xã Phú Mỹ Hưng, Huyện Củ Chi, Thành Phố Hồ Chí Minh, Phu My Hung Commune, Cu Chi District, Ho Chi Minh City</p>
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>399.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;