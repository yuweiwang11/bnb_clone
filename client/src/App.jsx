import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import SignUpPage from './pages/SignUpPage'

import axios from 'axios'

//connecting to api
axios.defaults.baseURL = 'http://localhost:4000'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
