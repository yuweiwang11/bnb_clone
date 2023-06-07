import AccountNav from '../AccountNav'
import { useState, useEffect } from 'react'
import axios from 'axios'

function BookingsPage() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data)
    })
  }, [])

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div key={booking._id}>{booking.checkIn}</div>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
