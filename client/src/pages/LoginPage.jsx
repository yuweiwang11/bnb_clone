function LoginPage(){
  return (
    <>
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-48">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com"/>
          <input type="passwd" placeholder="password" />
          <button className="primary">Login</button>
          <button >Sign up</button>
        </form>
      </div>
      
    </div>
    
    </>
  )
}
export default LoginPage