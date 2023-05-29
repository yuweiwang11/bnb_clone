import { Link, useParams } from 'react-router-dom'
import ListingFormPage from './ListingFormPage'
import AccountNav from '../AccountNav'

function ListingsPage() {
  // const [redirectToListing, setRedirectToListing] = useState(false)

  // if (redirectToListing && !action) {
  //   return <Navigate to={'account/listings'} />
  // }

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <h2>All Listings</h2>
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={'/account/listings/new'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add a new listing
        </Link>
      </div>
      {/* {action === 'new' && <ListingFormPage />} */}
    </div>
  )
}

export default ListingsPage
