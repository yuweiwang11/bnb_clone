import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingWidget from './BookingWidget'

function PlacePage() {
  const { id } = useParams()
  const [place, setPlace] = useState({})
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  // every time id changes useEffect will grab a new listing
  useEffect(() => {
    if (!id) {
      return
    } else {
      axios.get('/listings/' + id).then((response) => {
        setPlace(response.data)
        console.log(response.data)
      })
    }
  }, [id])
  // if (!place) return ''
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-48">photos of {place.title}</h2>

            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed left-20 top-28 gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black"
            >
              Close X
            </button>
          </div>
          {place.photos?.length > 0 &&
            place.photos.map((pic) => (
              <div key={place.titile} className="">
                <img src={'http://localhost:4000/uploads/' + pic} alt={pic} />
              </div>
            ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="mt-8 bg-gray-100 -m-8 px-8 pt-8">
        <h1 className="text-3xl">{place.title}</h1>
        <a
          className="flex gap-1 my-3 block font-semibold underline"
          target="_blank"
          href={'https://maps.google.com/?q=' + place.address}
          rel="noreferrer"
        >
          {place.address}
        </a>
        <div className="realative">
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <div>
              {place.photos?.[0] && (
                <div>
                  <img
                    onClick={() => setShowAllPhotos(true)}
                    className="aspect-square object-cover cursor-pointer"
                    src={'http://localhost:4000/uploads/' + place.photos[0]}
                    alt={place.title}
                  />
                </div>
              )}
            </div>
            <div className="grid">
              {place.photos?.[1] && (
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="aspect-square object-cover cursor-pointer"
                  src={'http://localhost:4000/uploads/' + place.photos[1]}
                  alt={place.title}
                />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img
                    onClick={() => setShowAllPhotos(true)}
                    className="aspect-square object-cover relative top-2 cursor-pointer"
                    src={'http://localhost:4000/uploads/' + place.photos[2]}
                    alt={place.title}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="flex gap-1 absolute bottom-2 right-8 py-2 px-4 bg-white rounded-2xl"
          >
            show more photos
          </button>
        </div>
        <div className="mt-8 mb-4 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">Description</h2>
              {place.description}
            </div>
            Check-in: {place.checkIn}
            <br />
            Check-out: {place.checkOut}
            <br />
            Max Guests: {place.maxGuests}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5 ">
            {place.extraInfo}
          </div>
        </div>
      </div>
    </>
  )
}
export default PlacePage
