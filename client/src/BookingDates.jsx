import { differenceInCalendarDays, format } from 'date-fns'

function BookingDates({ booking }) {
  return (
    <>
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
    </>
  )
}
export default BookingDates
