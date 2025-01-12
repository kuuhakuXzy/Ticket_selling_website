import { Avatar, AvatarGroup,Button,Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex direction={{base:"column", sm:"row"}} gap={{base: 4, sm: 10}} py={10}>
      <AvatarGroup 
        size={{base:"xl", md:"2xl"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name='As a programmer' src='/profilepic.png' alt="profile logo"></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex justifyContent={{base:"center", sm:"flex-start"}}
          alignItems={"center"}
          direction={{base:"column", sm:"row"}}
          w={"full"}
          gap={4}
        >
          <Text fontSize={{base: "sm", md:"lg"}}>As a programmer</Text>
          <Button size={{base:"xs", md:"sm"}}>Edit Profile</Button>
        </Flex>
        <Flex gap={{base:2, sm:4}} alignItems={"center"}>
          <Text fontSize={{base: "xs", sm:"sm"}}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>123</Text>
            Posts
          </Text>
          <Text fontSize={{base: "xs", sm:"sm"}}>
          <Text as={"span"} fontWeight={"bold"} mr={1}>123</Text>
            Followers
          </Text>
          <Text fontSize={{base: "xs", sm:"sm"}}>
          <Text as={"span"} fontWeight={"bold"} mr={1}>123</Text>
            Following
          </Text>
        </Flex>
        <Text fontSize={"sm"}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb</Text>
      </VStack>
    </Flex>

  )
}

export default ProfileHeader