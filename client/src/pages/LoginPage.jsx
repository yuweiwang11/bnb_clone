function LoginPage(){
  return (
    <>
    <div className="mt-4">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder={"your@email.com"}/>
        <input type="passwd" placeholder="password" />
        <button>Login</button>
        <button>Sign up</button>
      </form>
    </div>
    
    </>
  )
}
export default LoginPage