import React, { useState, useEffect } from 'react';
import './TicketSection.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getEventById } from '../../api/ApiFunction';

const TicketSection = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const navigate = useNavigate(); // Initialize navigation hook
  const [event, setEvent] = useState(null); // Store the entire event object
  const [isExpanded, setIsExpanded] = useState({
    earlyBird: false,
    official: false,
    combo: false,
  });

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

  const toggleExpand = (ticket) => {
    setIsExpanded((prev) => ({
      ...prev,
      [ticket]: !prev[ticket],
    }));
  };

  const handleBuyNow = () => {
    navigate(`/events/${id}/select-ticket`, { state: { event } });
  };

  if (!event) {
    return <div>Loading event details...</div>; // Loading state
  }



  return (
    <section className="ticket-section">
      <h2>Ticket Description</h2>
      <ul>
        <li className="ticket-item">
          <div
            className="ticket-header"
            onClick={() => toggleExpand('earlyBird')}
          >
            <span
              className={`arrow ${isExpanded.earlyBird ? 'down' : ''}`}
            >
              &#9654;
            </span>
            <h3>Ticket</h3>
            <span className="price"> {event.ticketPrice} $</span>
          </div>
          <div
            className={`ticket-content ${isExpanded.earlyBird ? 'active' : ''}`}
          >
            <p>{event.eventDescription}</p>
          </div>
        </li>
      </ul>
      <button className="buy-now" onClick={handleBuyNow}>Buy now</button>
    </section>
  );
};

export default TicketSection;
