import { useState } from 'react'

function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)

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
  )
}

export default PlaceGallery
