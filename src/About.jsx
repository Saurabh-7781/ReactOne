
import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function About() {
    const navigate = useNavigate()
    
    const gotoContactPage = () => {
        navigate("/contact")
    }

    return (
        <div>
            <h1>I am About Page</h1>
            <button onClick={gotoContactPage}>GO TO CONTACT PAGE</button>
        </div>
    )
}