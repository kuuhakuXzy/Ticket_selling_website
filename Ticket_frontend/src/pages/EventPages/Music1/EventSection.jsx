import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import eventImage from './Music1.png'; // Import the image using an import statement

const EventSection = () => (
  <section className="event-section">
    <div className="event-info">
      <h1>[Đà Nẵng] Những Thành Phố Mơ Màng Year End 2024</h1>
      <p><i className="fas fa-calendar-alt"></i> 15:00 - 22:30, 30 tháng 11, 2024 </p> 
      <p><i className="fas fa-location-dot"></i> Đà Nẵng (ngoài trời)</p> 
      <br /><br /> <br /> <br /> <hr className="divider" /> 
      <h1>Giá từ <span style={{color: "#00bfa5"}}>599.000 đ</span> </h1> <br />
      <button className="book-now-button">Mua vé ngay</button>
    </div>  
    <div className="event-image-container">
      <img src={eventImage} alt="My Local Image" />
    </div>
  </section>
);

export default EventSection;