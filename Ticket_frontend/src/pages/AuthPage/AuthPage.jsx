import React from 'react'
import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} bg="white">
      <Container maxW={"container.md"} padding={0} >
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
        <Box display={{ base: "none", md: "block" }}>
          <Image src="./auth.png" alt="Phone img" />
        </Box>
        <VStack spacing={2} align={"stretch"}>
          <AuthForm/>
        </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage