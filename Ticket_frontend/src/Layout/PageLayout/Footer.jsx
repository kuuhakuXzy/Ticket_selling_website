import React, { useState, useEffect } from 'react';
import './Footer.css';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../api/ApiFunction';

const Footer = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch the event data using getEventById and store the full response
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id); // Get the full event data
        setEvent(eventData); // Save the full object
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  if (!event) {
    return <div>Loading footer data...</div>; // Show a loading state
  }

  return (
    <footer>
      <div className="organizer-info">
        <h2 style={{ fontSize: '26px'}}><strong>Event Description</strong></h2>
        <p style={{ fontSize: '20px' }}>{event.eventDescription}</p>
      </div>
    </footer>
  );
};

export default Footer;
