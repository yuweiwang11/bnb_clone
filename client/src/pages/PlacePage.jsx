import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
            <h2 className="text-2xl">photos of {place.title}</h2>
            <h3>{place.address}</h3>
            {place.photos?.length > 0 &&
              place.photos.map((pic) => (
                <div key={place.titile} className="">
                  <img src={'http://localhost:4000/uploads/' + pic} alt={pic} />
                </div>

                // console.log(showAllPhotos)
                // console.log('http://localhost:4000/uploads/' + pic)
              ))}
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed left-24 top-40 gap-1 py-2 px-4 rounded-2xl bg-gray-300 shadow shadow-black bg-white text-black"
            >
              Close X
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="mt-8 bg-gray-100 -m-8 px-8 py-8">
        <h1 className="text-3xl">{place.title}</h1>
        <a
          className="my-2 block font-semibold underline"
          target="_blank"
          href={'https://maps.google.com/?q=' + place.address}
          rel="noreferrer"
        >
          {place.address}
        </a>
        <div className="realative">
          <div className="grid gap-2 grid-cols-[2fr_1fr]">
            <div>
              {place.photos?.[0] && (
                <div>
                  <img
                    className="aspect-square object-cover"
                    src={'http://localhost:4000/uploads/' + place.photos[0]}
                    alt={place.title}
                  />
                </div>
              )}
            </div>
            <div className="grid">
              {place.photos?.[1] && (
                <img
                  className="aspect-square object-cover"
                  src={'http://localhost:4000/uploads/' + place.photos[1]}
                  alt={place.title}
                />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img
                    className="aspect-square object-cover relative top-2"
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
      </div>
    </>
  )
}
export default PlacePage
