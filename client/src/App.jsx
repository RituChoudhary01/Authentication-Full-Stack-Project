import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ResetPassword from './pages/ResetPassword'
import EmailVerify from './pages/EmailVerify'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<h1 style={{ textAlign: "center", marginTop: "100px" }}>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
