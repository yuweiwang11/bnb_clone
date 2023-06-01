import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function IndexPage() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    axios.get('/places').then((response) => setPlaces(response.data))
  }, [])

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((listing) => (
          <>
            <Link to={'/listings/' + listing._id} key={listing._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                {listing.photos?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-squre"
                    src={'http://localhost:4000/uploads/' + listing.photos[0]}
                    alt={listing.title}
                  />
                )}
              </div>
              <h2 className=" font-bold">{listing.title}</h2>
              <h3 className="text-sm text-gray-500">{listing.address}</h3>
              <div className="mt-1">
                <span className="font-bold">${listing.price}NZD</span> per night
              </div>
            </Link>
          </>
        ))}
    </div>
  )
}

export default IndexPage
