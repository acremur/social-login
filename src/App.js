import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import './App.css'

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login/success`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Credentials": "true",
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => {
        if (res.status === 200) return res.json()
        throw new Error('Authentication has been failed!')
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => console.log(err))
    }
    getUser()
  }, [])
  
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;