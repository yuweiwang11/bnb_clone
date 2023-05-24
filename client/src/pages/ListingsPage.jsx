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
            <input
              className="flex-auto w-64 gap-2 border border-gray-300 rounded-2xl py-2 px-4 p-8"
              type="test"
              placeholder="title"
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <input type="test" placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ListingsPage
