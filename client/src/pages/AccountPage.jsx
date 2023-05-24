import { Navigate, Link, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useContext, useState } from 'react'
import ListingsPage from './ListingsPage'
import axios from 'axios'

function AccountPage() {
  let { subpage } = useParams()
  //setUser for reset username beside user icon after logout
  const { user, ready, setUser } = useContext(UserContext)
  const [redirect, setRedirect] = useState(null)

  if (subpage === undefined) {
    subpage = 'profile'
  }

  if (!ready) {
    return 'Loading...'
  }

  async function logout() {
    await axios.post('/logout')
    setUser(null)
    setRedirect('/')
  }
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  function linkClasses(type = null) {
    // need space between classes
    let classes = 'inline-flex gap-1 py-2 px-6 rounded-full '
    if (type === subpage) {
      classes += 'bg-primary text-white rounded-full '
    } else {
      classes += 'bg-gray-200'
    }
    return classes
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center mb-8">
        <Link className={linkClasses('profile')} to={'/account'}>
          {' '}
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
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          My Profile
        </Link>

        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          {' '}
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
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>
          My bookings
        </Link>

        <Link className={linkClasses('listings')} to={'/account/listings'}>
          {' '}
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          My accommodations
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            {' '}
            Logout{' '}
          </button>
        </div>
      )}
      {subpage === 'listings' && <ListingsPage />}
    </div>
  )
}

export default AccountPage
