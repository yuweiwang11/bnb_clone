import { Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useContext, useState } from 'react'
import ListingsPage from './ListingsPage'
import axios from 'axios'
import AccountNav from '../AccountNav'

function ProfilePage() {
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

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />
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

export default ProfilePage
