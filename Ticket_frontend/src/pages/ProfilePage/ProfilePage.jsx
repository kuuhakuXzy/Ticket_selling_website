import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/Profile/ProfileHeader"


const ProfilePage = () => {
  return (
    <Container maxW={"container.lg"} py={5}>
      <Flex flexDirection={"column"}
        w={"full"}
        py={10}
        px={4}
        pl={{base:4, md:10}}
        mx={"auto"}	
      >
        <ProfileHeader/>
      </Flex>
      <Flex
        px={{base: 2, sm: 4}} 
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        maxW={"full"}
        direction={"column"}
      >
        <ProfileTabs/>
        <ProfilePosts/>
      </Flex>
    </Container>
  )
}

export default ProfilePage