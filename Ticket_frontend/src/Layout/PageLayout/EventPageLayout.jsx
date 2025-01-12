// ./pages/EventPageLayout/EventPageLayout.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Replace with your API function as needed
import { getEventById } from '../../api/ApiFunction';
import Footer from '../PageLayout/Footer';
import EventSection from '../PageLayout/EventSection';
import TicketSection from './TicketSection';

function EventPageLayout() {
  return (
    <div>
      <EventSection />
      <Footer />
      <TicketSection />
    </div>
  );
}

export default EventPageLayout;
