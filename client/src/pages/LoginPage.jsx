import { Link } from 'react-router-dom'
function LoginPage() {
  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="-mt-48">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Login</button>
            <div className="text-right py-2 text-gray-700">
              <p>
                Don't have an account yet?{' '}
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
