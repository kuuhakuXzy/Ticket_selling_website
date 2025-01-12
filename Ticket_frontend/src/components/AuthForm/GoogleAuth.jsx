import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GoogleAuth = () => {
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
        <Image src="./google.png" w={5} alt="Google Logo" />
        <Text mx={2} color={"gray.700"}>
          Log in with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
