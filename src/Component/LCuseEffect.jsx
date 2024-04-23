import React, { useEffect, useState } from 'react'

export default function LCuseEffect() {
    const [counter,setCounter] = useState(0)
    const [number,setNumber] = useState(1)

    useEffect(()=>{
        console.log("Mounted")

        return ()=>{
            console.log("Unmounted")
        }
    })

    useEffect(()=>{
        console.log("Updated")
    })

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter + 1)}>INC</button>
      <br />
      <h2>{number}</h2>
      <button onClick={()=>setNumber(number + 2)}>ADD 2</button>
    </>
  )
}
