import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Music2.png';

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>[LULULOLA SHOW] TRUNG QUÂN | BUỒN KHÔNG THỂ BUÔNG</h1>
      <p><i className="fas fa-calendar-alt"></i> 17:30 - 19:30, 02 tháng 11, 2024 </p> 
      <p><i className="fas fa-location-dot"></i> Lululola Coffee</p> 
      <p>Đường 3/4, Đồi Cà Ri Dê, Phường 3, 3 Ward, Da Lat City, Lam Dong Province</p>
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>500.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;