import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  // Navigate to event details page
  const handleCardClick = () => {
    navigate(`/events/${event.eventId}`);
  };

  // Navigate to ticket selection page
  const handleBuyNowClick = () => {
    navigate(`/events/${event.eventId}/select-ticket`, { state: { event } });
  };

  // Determine ticket availability display
  const ticketStatus =
    event.availableTickets > 0 ? (
      <Text color="green.600" fontSize="lg" fontWeight="semibold">
        {event.availableTickets} tickets available
      </Text>
    ) : (
      <Text color="red.500" fontSize="lg" fontWeight="bold">
        Sold Out
      </Text>
    );

  return (
    <Card maxW="sm" boxShadow="md" borderRadius="md">
      <CardBody onClick={handleCardClick} cursor="pointer">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Event"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{event.eventName}</Heading>
          <Text>{event.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${event.ticketPrice}
          </Text>
          {ticketStatus}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={handleBuyNowClick}
            isDisabled={event.availableTickets === 0}
          >
            Buy now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
