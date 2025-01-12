import {Navigate, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from "./Layout/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import useAuthStore from "./store/authStore"
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage"
import EventPageLayout from "./Layout/PageLayout/EventPageLayout"
import MyEventPage from "./pages/MyEventPage/MyEventPage"

import TicketPage from "./pages/TicketPage/TicketPage"
import TicketSelectionPage from "./pages/TicketSelectionPage/TicketSelectionPage"
import TicketDetails from "./pages/TicketPage/TicketDetails"


import MsiPage from "./pages/EventPages/MSI/msi"; 
import SearchFeed from "./pages/SearchPage/SearchFeed"




function App() {
  const authUser = useAuthStore(state => state.user)
  return (
    <PageLayout>
      <Routes>
        <Route path='/home' element={!authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
        <Route path='/' element={!authUser ? <AuthPage/> : <Navigate to='/home'/>}/>

        <Route path='/auth' element={authUser ? <AuthPage/> : <Navigate to='/'/>}/>
        <Route path='/my-events' element={< MyEventPage />}/>
        
        <Route path='/create-event' element={!authUser ? <CreateEventPage/> : <Navigate to='/auth'/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />} />

        <Route path="/events/:id" element={<EventPageLayout />} />
        <Route path="/events/:id/select-ticket" element={<TicketSelectionPage />} />  

        <Route path="/mytickets" element={<TicketPage />} />
        <Route path="/tickets-details/:id" element={<TicketDetails />} />

        <Route path="/msi" element={<MsiPage />} />
      </Routes> 
    </PageLayout>
  )
}

export default App
