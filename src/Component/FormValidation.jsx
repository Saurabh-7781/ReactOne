import React, { useState } from 'react'

export default function FormValidation() {
    
    const [name ,setName] = useState("")
    const [password ,setPassword] = useState("")
    const [nameerr ,setNameErr] = useState(false)
    const [passworderr ,setPasswordErr] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        if(name.length <= 3 || password.length <= 3){
            alert("Please Enter Valid Values")
        }else{
            alert("All Good!")
            console.log("name : " + name)
            console.log("Password : " + password)
        }
    }

    const handleName = (e) => {
          let value = e.target.value
          if(value.length <= 3){
            setNameErr(true)
          } else{
            setNameErr(false)
          }
          setName(value)
    } 

    const handlePassword = (e) => {
        let value = e.target.value
        if(value.length <= 3){
          setPasswordErr(true)
        } else{
          setPasswordErr(false)
        }
        setPassword(value)
  } 

  return (
    <>
    <form onSubmit={handleForm}>
      <input type="text" placeholder='Enter your username' onChange={handleName} />
      {nameerr ? <span>User Not valid</span> : ""}
      <br /><br />
      <input type="password" placeholder='Enter your Password' onChange={handlePassword} />
      {passworderr ? <span>Password not valid</span> : ""}
      <br /><br />
      <button>Submit</button>
      </form>
    </>
  )
}
