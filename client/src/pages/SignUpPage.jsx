import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function userSignUp(e) {
    // send request to api
    e.preventDefault()
    axios.post('/signUp', {
      name,
      email,
      password,
    })
  }

  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="-mt-48">
          <h1 className="text-4xl text-center mb-4">Sign Up</h1>
          <form onSubmit={userSignUp} className="max-w-md mx-auto">
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your@email.com"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="primary">Sign Up</button>
            <div className="text-right py-2 text-gray-700">
              <p>
                Already a member?{' '}
                <Link className="underline text" to={'/login'}>
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignUpPage
