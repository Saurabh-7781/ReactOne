import React, { useState } from 'react'

export default function ControlledCom() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleForm = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
    }

  return (
    <>
         <form action="" onSubmit={handleForm}>
            <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
            <br /> <br />
            <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <br /> <br />
        <button>Submit</button>
         </form>
    </>
  )
}
