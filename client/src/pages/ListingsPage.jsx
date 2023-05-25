import { Link, useParams } from 'react-router-dom'

function ListingsPage() {
  const { action } = useParams()
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
            <h2 className="text-2xl mt-4 mb-1">Title</h2>
            <input type="text" placeholder="title" />

            <h2 className="text-2xl mt-4">Address</h2>
            <input type="text" placeholder="address" />

            <h2 className="text-2xl mt-4">Description</h2>
            <textarea />

            <h2 className="text-2xl mt-4">Amenities</h2>
            <p className="text-gray-500 text-md mt-1">
              What you have provided for the guests
            </p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>WIFI</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>Parking</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>Air conditioning</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>Hot water</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-3 items-center">
                <input type="checkbox" />
                <span>Essentials</span>
              </label>
            </div>

            <h2 className="text-2xl mt-4 mb-1">
              Check-in/out time & Maximum guests{' '}
            </h2>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 mb-1">Check-in time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Check-out time</h3>
                <input type="text" placeholder="10:00" />
              </div>
              <div>
                <h3 className="mt-2 mb-1">Maximum guests</h3>
                <input type="text" placeholder="3" />
              </div>
            </div>

            <h2 className="text-2xl mt-4 mb-1">Extra Info</h2>
            <textarea placeholder="House rules, etc." />

            <h2 className="text-2xl mt-4">Photos</h2>
            <div className="flex gap-2">
              <input type="text" placeholder={'Add photos using links'} />
              <button className="bg-gray-200 text-sm mt-2 mb-2 px-4 rounded-2xl">
                Add Picture
              </button>
            </div>

            <div className="mt-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
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
