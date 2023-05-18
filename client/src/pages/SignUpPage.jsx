import {Link} from "react-router-dom"

function SignUpPage(){
  return (
    <>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-48">
        <h1 className="text-4xl text-center mb-4">Sign Up</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your full name"/>
          <input type="email" placeholder="Your@email.com"/>
          <input type="passwd" placeholder="Password" />
          <button className="primary">Sign Up</button>
          <div className="text-right py-2 text-gray-700">
            <p>Already a member? <Link className="underline text" to={"/login"} >Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
export default SignUpPage