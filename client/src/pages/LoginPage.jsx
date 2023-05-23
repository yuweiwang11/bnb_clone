import { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../UserContext'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  // using useContext
  const { setUser } = useContext(UserContext)

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.post('/login', { email, password })
      setUser(response.data)
      alert('Login successful')
      setRedirect(true)
    } catch (e) {
      alert('Login failed')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="-mt-48">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="primary">Login</button>
            <div className="text-right py-2 text-gray-700">
              <p>
                Do not have an account yet?
                <Link className="underline text" to={'/signUp'}>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default LoginPage
