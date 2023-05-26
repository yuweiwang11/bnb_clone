import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Amenities from '../Amenities'
import axios from 'axios'

function ListingsPage() {
  const { action } = useParams()

  const [title, setTitle] = useState('')
  const [address, setaddress] = useState('')
  const [addedPhotots, setAddedPhotots] = useState([])
  const [photoLink, setPhotoLink] = useState('')
  const [description, setDescription] = useState('')
  const [amenities, setAmenities] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setChckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4 mb-1">{text}</h2>
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-md mt-1">{text}</p>
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    )
  }

  async function addPhotoByLink(e) {
    e.preventDefault()
    const { data: filename } = await axios.post('/upload-by-link', {
      link: photoLink,
    })
    setAddedPhotots((prev) => {
      return [...prev, filename]
    })
  }

  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
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
      )}

      {action === 'new' && (
        <div>
          <form>
            {preInput('Titile', '')}
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              type="text"
              placeholder="title"
            />

            {preInput('Address', '')}
            <input
              value={address}
              onChange={(e) => {
                setaddress(e.target.value)
              }}
              type="text"
              placeholder="address"
            />

            {preInput('Description', '')}
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />

            {preInput('Amenities', 'What you have provided for the guests')}
            <Amenities selected={amenities} onChagne={setAmenities} />

            {preInput('Check-in/out time & Maximum guests', '')}

            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 mb-1">Check-in time</h3>
                <input
                  value={checkIn}
                  onChange={(e) => {
                    setChckIn(e.target.value)
                  }}
                  type="text"
                  placeholder="14:00"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Check-out time</h3>
                <input
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value)
                  }}
                  type="text"
                  placeholder="10:00"
                />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Maximum guests</h3>
                <input
                  value={maxGuests}
                  onChange={(e) => {
                    setMaxGuests(e.target.value)
                  }}
                  type="number"
                  placeholder="3"
                />
              </div>
            </div>

            {preInput('Extra Info', '')}
            <textarea
              value={extraInfo}
              onChange={(e) => {
                setExtraInfo(e.target.value)
              }}
              placeholder="House rules, etc."
            />

            {preInput('Photos', '')}
            <div className="flex gap-2">
              <input
                value={photoLink}
                onChange={(e) => {
                  setPhotoLink(e.target.value)
                }}
                type="text"
                placeholder={'Add photos using links'}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-gray-200 text-sm mt-2 mb-2 px-4 rounded-2xl"
              >
                Add Picture
              </button>
            </div>

            <div className="mt-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
              {addedPhotots.length > 0 &&
                addedPhotots.map((link) => <div>{link}</div>)}
              <button className="flex shrink-0 gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ListingsPage
