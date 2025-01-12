import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TicketCard from "../../components/Ticket/TicketCard";
import { getUserTickets, getUserId} from "../../api/ApiFunction";

const TicketPage = () => {
    const userID = getUserId();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getUserTickets(userID).then(data => setTickets(data));
  }, []);

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={4} spacing={10} p={5}>
        {tickets.map(tickets => (
          <TicketCard key={tickets.ticketId} tickets={tickets} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TicketPage;
