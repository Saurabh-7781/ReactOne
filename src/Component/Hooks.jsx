import React, {useState} from 'react'

export default function Hooks() {
   
    const [name,setName] = useState("Hello World !!")
    const [counter,setCounter] = useState(0)

    const changeState = () => {
        
        if(name === "Hello World !!"){
            setName("Jay shree Ram")
        } else {
             setName("Hello World !!")
        }
    }

  return (
    <div>
        {name}
      <br />
      <button onClick={changeState}>Change State</button>
      <hr />

      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter + 1)}>Increment</button>
      <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
    </div>
  )
}
