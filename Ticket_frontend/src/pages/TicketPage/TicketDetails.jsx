import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons
import './TicketDetails.css'; // Import CSS for styling
import { getUserTickets, getUserId } from '../../api/ApiFunction'; // Import API function

const TicketDetails = () => {
  const { id } = useParams(); // Get the ticket ID from the URL
  const userID = getUserId();
  const [ticket, setTicket] = useState(null);
  console.log(id)
  useEffect(() => {
    // Fetch all tickets and filter for the one with the matching ID
    getUserTickets(userID).then(data => {
      console.log(data);
      const selectedTicket = data.find(t => t.ticketId === id);
      console.log('Selected ticket:', selectedTicket);
      setTicket(selectedTicket);
    });
  }, [id, userID]);

  const handlePrintTicket = () => {
    if (!ticket) return;

    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Event Ticket', 20, 20);
    doc.setFontSize(14);
    doc.text(`Event Name: ${ticket.event.eventName}`, 20, 40);
    doc.text(`Location: ${ticket.event.location}`, 20, 60);
    doc.text(`Date: ${ticket.event.eventDate}`, 20, 80);
    doc.text(`Time: ${ticket.event.eventStartTime} - ${ticket.event.eventEndTime}`, 20, 100);
    doc.text(`Ticket owner: ${ticket.user.username}`, 20, 120);
    doc.text(`Ticket ID: ${ticket.ticketId}`, 20, 140);
    doc.save('ticket.pdf');
  };

  if (!ticket) {
    return <div>Loading ticket details...</div>;
  }

  return (
    <div className="ticket-details-container">
      <div className="ticket-details">
        <h1>{ticket.event.eventName}</h1>
        <p>
          <i className="fas fa-calendar-alt"></i> {ticket.event.eventDate}  | {ticket.event.eventStartTime} - {ticket.event.eventEndTime}
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> {ticket.event.location}
        </p>
        <p>
          <i className="fas fa-user"></i> {ticket.user.username}
        </p>
        <p>
          {ticket.ticketId}
        </p>
        <button onClick={handlePrintTicket} className="print-ticket-button">
          <i className="fas fa-print"></i> Print Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
