import {Flex,Box} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar';



const PageLayout = ({children}) => {
  const {pathname} = useLocation();
  const canRenderNavbar = pathname !== "/auth" ;
  return (
    <Flex direction="column" 
    bg="#3f3f40" 
    minH="100vh">
      {canRenderNavbar?<NavBar/>:null}
      <Box flex={1} w={"full"}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout