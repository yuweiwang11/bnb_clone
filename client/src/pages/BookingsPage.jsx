import AccountNav from '../AccountNav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaceImg from '../PlaceImg'

function BookingsPage() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/bookings').then((response) => {
      setBookings(response.data)
      // console.log(response.data[0].place.title)
    })
  }, [])

  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div className="flex gap-4 bg-gray-200" key={booking._id}>
              <div className="w-48">
                <PlaceImg listing={bookings[0].place} />
              </div>
              {booking.checkIn}
            </div>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
