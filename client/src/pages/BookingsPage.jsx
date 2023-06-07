import AccountNav from '../AccountNav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlaceImg from '../PlaceImg'
import { differenceInCalendarDays, format } from 'date-fns'
import { Link } from 'react-router-dom'

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
                <div className="border-t gap-2 items-center border-gray-300 mt-2 py-2">
                  {format(new Date(booking.checkIn), 'yyyy-MM-dd')} &rarr;{' '}
                  {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                </div>
                <div className="text-xl flex gap-1">
                  {differenceInCalendarDays(
                    new Date(booking.checkOut),
                    new Date(booking.checkIn)
                  )}{' '}
                  Night(s) | Price: ${booking.price}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
export default BookingsPage
