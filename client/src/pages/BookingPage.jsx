import { useParams } from 'react-router-dom'

function BookingPage() {
  const { id } = useParams()
  return <div>User single booking page: {id}</div>
}
export default BookingPage
