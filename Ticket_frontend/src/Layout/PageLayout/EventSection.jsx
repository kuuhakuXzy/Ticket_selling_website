import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './EventSection.css'; // Import the specific CSS file for EventSection
import { getEventById } from '../../api/ApiFunction'; // Import your API function
import placeholderImage from '../../pages/HomePage/Horizontal_placeholder.png'; // Import a placeholder image

const EventSection = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Initialize navigation hook
  const [event, setEvent] = useState(null); // Store the entire event object

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id); // Fetch the event details
        setEvent(eventData); // Save the full event object
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>; 
  }

  const handleBuyNow = () => {
    navigate(`/events/${id}/select-ticket`, { state: { event } });
  };

  return (
      <section className="event-section">
      <div className="event-info">
        <h1>{event.eventName}</h1>
        <p>
          <i className="fas fa-calendar-alt" style={{ marginRight: '8px' }}></i> 
          {`${event.eventStartTime} - ${event.eventEndTime}, ${event.eventDate}`}
        </p>
        <p>
          <i className="fas fa-location-dot" style={{ marginRight: '8px' }}></i> 
          {event.location}
        </p>
        <p>{event.address}</p>
        <br />
        <hr className="divider" />
        <h1>
          Price <span style={{ color: '#00bfa5' }}>{event.ticketPrice ? `${event.ticketPrice} $` : '129.000 đ'}</span>
        </h1>
        <br />
        <button className="book-now-button" onClick={handleBuyNow}>Buy now</button>
      </div>
      <div className="event-image-container">
        <img src={placeholderImage} alt="Event Placeholder" />
      </div>
    </section>
  );
};

export default EventSection;
