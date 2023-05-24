import { Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import SignUpPage from './pages/SignUpPage'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'
import axios from 'axios'

//connecting to api
axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* subpage | ?optional */}
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage/:action" element={<AccountPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
