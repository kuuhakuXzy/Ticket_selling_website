import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventForm/EventCard";
import { getEvents } from "../../api/ApiFunction";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(data => setEvents(data));
  }, []);

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} spacing={10} p={5}>
        {events.map(event => (
          <EventCard key={event.eventId} event={event} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HomePage;
