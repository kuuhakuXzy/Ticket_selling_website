import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './TicketSelectionPage.css';
import { getUserId } from '../../api/ApiFunction';
import { createTicket } from '../../api/ApiFunction';

const TicketSelectionPage = () => {
  const { id } = useParams(); // Retrieve the event ID
  const { state } = useLocation();
  const navigate = useNavigate();
  const { event } = state || {};
  const [quantity, setQuantity] = useState(0);

  if (!event) {
    return <div>No event details found!</div>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(0, prev + amount)); // Prevent negative quantities
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const ticketData = {
      userId: getUserId(),
      eventId: event.eventId,
      numberOfTickets: quantity,
      }
      console.log(ticketData);
    createTicket(ticketData);
    alert(`Purchased ${quantity} tickets for ${event.eventName}`);
    navigate('/home'); // Redirect back to home or another page after purchase
  };

  return (
    <div className="ticket-selection">
      <h1>Select Ticket</h1>
      <div className="ticket-details">
        <div className="ticket-type">
          <span>{event.ticketType || 'Ticket Name'}</span>
          <span>{event.ticketPrice*quantity || '0'} $</span>
        </div>
        <div className="quantity-selector">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
      </div>
      <div className="coupon-section">
        <input type="text" placeholder="Enter coupon code" />
      </div>
      <button className="purchase-button" onClick={handlePurchase}>Proceed to Checkout</button>
    </div>
  );
};

export default TicketSelectionPage;
