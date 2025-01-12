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
  
  const TicketCard = ({ tickets }) => {
    const navigate = useNavigate();
  
  // Navigate to event details page
  const handleCardClick = () => {
    navigate(`/tickets-details/${tickets.ticketId}`);
  };

    return (
      <Card maxW="sm" boxShadow="md" borderRadius="md">
        <CardBody onClick={handleCardClick} cursor="pointer">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Event"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{tickets.event.eventName}</Heading>
            <Text color="blue.600" fontSize="1x1">
              {tickets.event.location}
            </Text>
            <Text color="blue.600" fontSize="1x1">
              {tickets.event.eventDate} | {tickets.event.eventStartTime} - {tickets.event.eventEndTime}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        </CardFooter>
      </Card>
    );
  };
  
  export default TicketCard;
  