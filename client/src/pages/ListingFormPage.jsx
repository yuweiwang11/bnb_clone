import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Amenities from '../Amenities'
import PhotoUploader from '../PhotoUploader'
import axios from 'axios'
import AccountNav from '../AccountNav'

function ListingFormPage() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [address, setaddress] = useState('')
  const [addedPhotots, setAddedPhotots] = useState([])
  const [description, setDescription] = useState('')
  const [amenities, setAmenities] = useState([])
  const [extraInfo, setExtraInfo] = useState('')
  const [checkIn, setChckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [maxGuests, setMaxGuests] = useState(1)
  const [redirect, setRedirect] = useState(false)

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

  // use prevenDefault() on onSubmit to preven default function
  async function addNewListing(e) {
    e.preventDefault()
    await axios.post('/listings', {
      title,
      address,
      addedPhotots,
      description,
      amenities,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    })
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to={'/account/listings'} />
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewListing}>
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
        <Amenities selected={amenities} onChange={setAmenities} />

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
        <PhotoUploader addedPhotots={addedPhotots} onChange={setAddedPhotots} />

        <button className="primary my-4">Save</button>
      </form>
    </div>
  )
}

export default ListingFormPage
