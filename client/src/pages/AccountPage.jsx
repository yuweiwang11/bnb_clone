import { Navigate, Link, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useContext, useState } from 'react'
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
  if (ready && !user) {
    return <Navigate to={'/login'} />
  }

  function linkClasses(type = null) {
    // need space between classes
    let classes = 'py-2 px-6 '
    if (type === subpage) {
      classes += 'bg-primary text-black rounded-full'
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
          My Profile
        </Link>

        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          {' '}
          My bookings
        </Link>

        <Link className={linkClasses('listings')} to={'/account/listings'}>
          {' '}
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
    </div>
  )
}

export default AccountPage
