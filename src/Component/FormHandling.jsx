import React, { useState} from 'react'

export default function FormHandling() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");
    const [check, setCheck] = useState(false)

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleForm = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(select)
        console.log(check)
    

    // input field clear karva

    e.target.reset();
    
  }

  return (
    <>
      <br /> <br />
      <form onSubmit={handleForm}>
        <label htmlFor="">Name :</label>
        <input type="text" placeholder='Enter your Name' onChange={handleName} />
      <br /> <br />
        <label htmlFor="">Email :</label>
        <input type="email" placeholder='Enter your Email' onChange={(e)=> setEmail(e.target.value)} />
        <br /><br />
        Interest : 
       <select onChange={(e) => setSelect(e.target.value)}>
        <option >---Select---</option>
        <option >Ahemdabad</option>
        <option >Surat</option>
        <option >Amreli</option>
        <option >Vadodara</option>
        </select>
        <br /><br />
        <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
        <span>Apply terms and Conditions</span>
        <br /><br />
        <button> Submit </button>

      </form>
    </>
  )
}
