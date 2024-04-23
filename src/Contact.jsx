
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()

    const gotoHomePage = () => {
        navigate("/")
    }
  return (
    <div>
      <h1>I am Contact page</h1>
      {/* <Link to="/">Go To Home Page</Link> */}
      <button onClick={gotoHomePage}>Go to Home page</button>
    </div>
  )
}
