import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Hobbies1.jpg';

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>VIEWING PARTY - CHUNG KẾT TỔNG MSI 2025 | TPHCM & HÀ NỘI</h1>
      <p><i className="fas fa-calendar-alt"></i> 15:00 - 22:00, 19 tháng 05, 2025 </p> 
      <p><i className="fas fa-location-dot"></i> Lotte Cinema Gò Vấp | Lotte Cinema Tây Hồ</p> 
      <p>242 Nguyễn Văn Lượng, 10 Ward, Go Vap District, Ho Chi Minh City</p>
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>129.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;