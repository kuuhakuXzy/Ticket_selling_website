import React, {useState} from "react";
import { Flex, Box, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import EventForm from "../../components/EventForm/EventForm";

const CreateEventPage = () => {
  return (
    <Flex align="center" justify="center" p={20} w={"full"}> 
      <Box
        maxW="4xl"
        w="full"
        border={"1px solid gray"}
        borderRadius={10}
        padding={10}
        backgroundColor="white"
      >
        <VStack spacing={8} align="center">
          <Heading as="h1" size="xl" textAlign="center" mb={2}>
            Create a New Event
          </Heading>
          <EventForm />
        </VStack>
      </Box>
    </Flex>
  );
};

export default CreateEventPage;
