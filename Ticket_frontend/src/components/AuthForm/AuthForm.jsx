import React, { useState } from "react";
import {
  Input,
  VStack,
  Button,
  Flex,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box
        border={"1px solid gray"}
        borderRadius={10}
        padding={10}
        bg={"#FFA500"}
      >
        <VStack spacing={4}>
          {/* <Image  alt="logo" /> */}

          {!isLogin ? <Login /> : <SignUp />}
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"black"} />
            <Text color={"black"}>OR</Text>
            <Box flex={2} h={"1px"} bg={"black"} />
          </Flex>
          <GoogleAuth/>
          <Flex justifyContent={"center"} alignItems={"center"} my={3} gap={3}>
            <Box color={"black"}>
              {!isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box
              mx={"auto"}
              color={"gray.700"}
              onClick={() => setIsLogin(!isLogin)}
              cursor={"pointer"}
            >
              {!isLogin ? "Sign Up" : "Log In"}
            </Box>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default AuthForm;
