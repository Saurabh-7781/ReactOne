
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate()

    const gotoAboutPage = () => {
        navigate("/About",{state : {name : "saurabh"}})
    }

    return (
        <div>
            <h1>I am Home Page</h1>
            <button onClick={gotoAboutPage}>GO TO About PAGE</button>
        </div>
    )
}