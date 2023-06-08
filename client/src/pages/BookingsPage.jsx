import AccountNav from '../AccountNav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaceImg from '../PlaceImg'
import { differenceInCalendarDays, format } from 'date-fns'
import { Link } from 'react-router-dom'
import BookingDates from '../BookingDates'

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
            <Link
              to={`/account/bookings/${booking._id}`}
              className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden"
              key={booking._id}
            >
              <div className="w-48">
                <PlaceImg listing={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <BookingDates booking={booking} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
