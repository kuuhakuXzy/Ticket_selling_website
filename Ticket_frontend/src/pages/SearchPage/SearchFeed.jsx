import {
  Box,
  Stack,
  Text,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../../components/EventForm/EventCard";
import { getEventBySearchTerm } from "../../api/ApiFunction";

const SearchFeed = () => {
  const [events, setEvents] = useState([]);
  const {searchTerm} = useParams();
  

  useEffect(() => {
    getEventBySearchTerm(searchTerm).then(data => setEvents(data));
  }
  ,[searchTerm]);


  return (
    <Container maxW="container.xl" >
      <Flex gap={20} flexWrap="wrap">
        {events.map(event => (
          <Box key={event.eventId}>
            <EventCard event={event}/>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default SearchFeed;


