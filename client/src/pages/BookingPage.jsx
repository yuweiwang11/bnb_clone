import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressLink from '../AddressLink'
import PlaceGallery from '../PlaceGallery'
import BookingDates from '../BookingDates'

function BookingPage() {
  const { id } = useParams()
  const [booking, setBooking] = useState(null)
  useEffect(() => {
    if (id) {
      axios.get('/bookings').then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id)
        if (foundBooking) {
          setBooking(foundBooking)
        }
      })
    }
  }, [id])

  if (!booking) {
    return ''
  }
  return (
    <div className="mt-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink>{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl">
        <h2 className="text-xl mb-2">Your booking information</h2>
        <BookingDates booking={booking} />
      </div>
      <PlaceGallery place={booking.place} />
    </div>
  )
}
export default BookingPage
