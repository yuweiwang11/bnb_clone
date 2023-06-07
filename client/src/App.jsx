import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import SignUpPage from './pages/SignUpPage'
import { UserContextProvider } from './UserContext'
import ProfilePage from './pages/ProfilePage'
import ListingsPage from './pages/ListingsPage'
import axios from 'axios'
import ListingFormPage from './pages/ListingFormPage'
import PlacePage from './pages/PlacePage'
import BookingsPage from './pages/BookingsPage'
import BookingPage from './pages/BookingPage'

//connecting to api
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/account" element={<ProfilePage />} />
            {/* subpage | ?optional */}
            {/* <Route path="/account/:subpage?" element={<ProfilePage />} /> */}
            <Route path="/account/listings" element={<ListingsPage />} />
            <Route path="/account/listings/new" element={<ListingFormPage />} />
            <Route path="/account/listings/:id" element={<ListingFormPage />} />
            <Route path="/listings/:id" element={<PlacePage />} />
            <Route path="/account/bookings" element={<BookingsPage />} />
            <Route path="/account/bookings/:id" element={<BookingPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
