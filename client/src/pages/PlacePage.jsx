import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PlacePage() {
  const { id } = useParams()
  const [place, setPlace] = useState({})

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
  return (
    <>
      <div className="mt-8 bg-gray-100 -m-8 px-8 py-8">
        <h1 className="text-3xl">{place.title}</h1>
        <a
          className="my-2 block font-semibold underline"
          target="_blank"
          href={'https://maps.google.com/?q=' + place.address}
        >
          {place.address}
        </a>
      </div>
    </>
  )
}
export default PlacePage
