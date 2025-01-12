import React, { useState, useEffect} from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  Divider,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useShowToast from "../../hook/useShowToast";
import { createEvent } from "../../api/ApiFunction";
import dayjs from "dayjs";

const EventForm = () => {
  const [activeTab, setActiveTab] = useState("eventInfo");
  const [formData, setFormData] = useState({
    organizer: "",
    eventName: "",
    eventDescription: "",
    eventLocation: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    category: "",
    ticketPrice: "",
    maxAttendees: "",
    availableTickets: "",
    minimumTickets: "",
    maximumTickets: "",
    ticketDescription: "",
  });
  const [errors, setErrors] = useState({});
  const showToast = useShowToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      eventDate: date,
    });
  };

  const handleStartTimeChange = (time) => {
      setFormData({
        ...formData,
        startTime: time,

      });
  };

  const handleEndTimeChange = (time) => {
      setFormData({
        ...formData,
        endTime: time,
      });
  };

  const validate = () => {
    const errors = {};
    if (!formData.organizer) errors.organizer = "Organizer is required.";
    if (!formData.eventName) errors.eventName = "Event name is required.";
    if (!formData.eventDescription) errors.eventDescription = "Event description is required.";
    if (!formData.eventLocation) errors.eventLocation = "Event location is required.";
    if (!formData.eventDate) errors.eventDate = "Event date is required.";
    if (!formData.startTime) errors.startTime = "Start time is required.";
    if (!formData.endTime) errors.endTime = "End time is required.";
    if (!formData.maxAttendees) errors.maxAttendees = "Maximum attendees is required.";
    if (!formData.minimumTickets) errors.minimumTickets = "Minimum number of tickets is required."; // Add validation for minimumTickets
    if (!formData.maximumTickets) errors.maximumTickets = "Maximum number of tickets is required."; // Add validation for maximumTickets
    if (!formData.ticketPrice) errors.ticketPrice = "Ticket price is required.";
    if (!formData.availableTickets) errors.availableTickets = "Total number of tickets is required.";
    if (!formData.ticketDescription) errors.ticketDescription = "Ticket description is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
      // Include the user ID from localStorage
      const userId = localStorage.getItem("userId");
      if (!userId) {
        showToast("Error", "User not logged in. Please log in to create an event.", "error");
        return;
      }
      // Submit form data to backend
      const eventData = {
        organizerId: userId,
        eventName: formData.eventName,
        eventDescription: formData.eventDescription,
        location: formData.eventLocation,
        eventDate: formData.eventDate,
        eventStartTime: formData.startTime,
        eventEndTime: formData.endTime,
        category: formData.category,
        ticketPrice: formData.ticketPrice,
        maxAttendees: formData.maxAttendees,
        availableTickets: formData.availableTickets,
        minTickets: formData.minimumTickets,
        maxTickets: formData.maximumTickets, 
        ticketDescription: formData.ticketDescription,
      };

      const response = createEvent(eventData);
      showToast("Success", "Event created successfully!", "success");
    } catch (error) {
      showToast("Error", "Error creating event", "error");
    }
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" p={10}>

      {/* Tab Navigation Bar */}
      <Flex mb={6} justify="center">
        <Button
          variant={activeTab === "eventInfo" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => setActiveTab("eventInfo")}
          mr={2}
        >
          Event Information
        </Button>
        <Button
          variant={activeTab === "showTimeTicket" ? "solid" : "outline"}
          colorScheme="teal"
          onClick={() => setActiveTab("showTimeTicket")}
        >
          Show Time & Ticket
        </Button>
      </Flex>

      <Divider mb={6} />

      {/* Tab Content */}
      <VStack spacing={6}>
        {activeTab === "eventInfo" && (
          <Box w="full">

        <FormControl isInvalid={errors.organizer}>
          <FormLabel>Organizer</FormLabel>
          <Input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            placeholder="Event Organizer"
            outline={"1px solid gray"}
            _placeholder={{ opacity: 0.5, color: "gray.700" }}
            focusBorderColor="black"
            marginBottom={6}
          />
          <FormErrorMessage>{errors.organizer}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.eventName}>
          <FormLabel>Event Name</FormLabel>
          <Input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Event Name"
            outline={"1px solid gray"}
            _placeholder={{ opacity: 0.5, color: "gray.700" }}
            focusBorderColor="black"
            marginBottom={6}
          />
          <FormErrorMessage>{errors.eventName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.eventLocation}>
          <FormLabel>Event Location</FormLabel>
          <Input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            placeholder="Event Location"
            outline={"1px solid gray"}
            _placeholder={{ opacity: 0.5, color: "gray.700" }}
            focusBorderColor="black"
            marginBottom={6}
          />
          <FormErrorMessage>{errors.eventLocation}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.eventDescription}>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            placeholder="Event Description"
            outline={"1px solid gray"}
            _placeholder={{ opacity: 0.5, color: "gray.700" }}
            focusBorderColor="black"
            marginBottom={6}
          />
          <FormErrorMessage>{errors.eventDescription}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.category}>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            outline={"1px solid gray"}
            _placeholder={{ opacity: 0.5, color: "gray.700" }}
            focusBorderColor="black"
            marginBottom={6}
          />
          <FormErrorMessage>{errors.category}</FormErrorMessage>
        </FormControl>

            {/* Add other form fields as needed */}
          </Box>
        )}

        {activeTab === "showTimeTicket" && (
          <Box w="full">

            {/* Show Time and Ticket Section Layout */}
            <FormControl isInvalid={errors.eventDate}>
              <FormLabel>Event Date</FormLabel>
              <DatePicker
                selected={formData.eventDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                customInput={
                  <Input
                    textAlign={"center"}
                    cursor={"pointer"}
                  />
                }
              />
              <FormErrorMessage>{errors.eventDate}</FormErrorMessage>
            </FormControl>

            <Flex mt={4} gap={4}>
              <FormControl isInvalid={errors.startTime}>
                <FormLabel>Start Time</FormLabel>
                <DatePicker
                  selected={formData.startTime}
                  onChange={handleStartTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="p"
                  dateFormat="h:mm aa"
                  customInput={<Input textAlign="center" />}
                  marginBottom={6}
                />
                <FormErrorMessage>{errors.startTime}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.endTime}>
                <FormLabel>End Time</FormLabel>
                <DatePicker
                  selected={formData.endTime}
                  onChange={handleEndTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="p"
                  dateFormat="h:mm aa"
                  customInput={<Input textAlign="center" />}
                  marginBottom={6}
                />
                <FormErrorMessage>{errors.endTime}</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl mt={4} isInvalid={errors.ticketPrice}>
              <FormLabel>Ticket Price</FormLabel>
              <InputGroup>
                <Input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  placeholder="0.0"
                  marginBottom={6}
                />
                <InputRightElement children="$" />
              </InputGroup>
              <FormErrorMessage>{errors.ticketPrice}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.availableTickets}>
              <FormLabel>Total number of ticket</FormLabel>
              <Input
                type="number"
                name="availableTickets"
                value={formData.availableTickets}
                onChange={handleChange}
                placeholder="0"
                marginBottom={6}
              />
              <FormErrorMessage>{errors.availableTickets}</FormErrorMessage>
            </FormControl>

              {/* New Field: Maximum Attendees */}
            <FormControl mt={4} isInvalid={errors.maxAttendees}>
              <FormLabel>Maximum Attendees</FormLabel>
              <Input
                type="number"
                name="maxAttendees"
                value={formData.maxAttendees}
                onChange={handleChange}
                placeholder="0"
                marginBottom={6}
              />
              <FormErrorMessage>{errors.maxAttendees}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.minimumTickets}>
              <FormLabel>Minimum number of tickets for one purchase</FormLabel>
              <Input
                type="number"
                name="minimumTickets"
                value={formData.minimumTickets}
                onChange={handleChange}
                placeholder="0"
                marginBottom={6}
              />
              <FormErrorMessage>{errors.minimumTickets}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.maximumTickets}>
              <FormLabel>Maximum number of tickets for one purchase</FormLabel>
              <Input
                type="number"
                name="maximumTickets"
                value={formData.maximumTickets}
                onChange={handleChange}
                placeholder="0"
                marginBottom={6}
              />
              <FormErrorMessage>{errors.maximumTickets}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.ticketDescription}>
            <FormLabel>Ticket Description</FormLabel>
            <Textarea
              name="ticketDescription"
              value={formData.ticketDescription}
              onChange={handleChange}
              placeholder="Ticket Description"
              outline={"1px solid gray"}
              _placeholder={{ opacity: 0.5, color: "gray.700" }}
              focusBorderColor="black"
              marginBottom={6}
            />
            <FormErrorMessage>{errors.ticketDescription}</FormErrorMessage>
            </FormControl>
          </Box>
          
        )}

        <Button type="submit" colorScheme="teal" mt={4}>
          Create Event
        </Button>
      </VStack>
    </Box>
  );
};

export default EventForm;
