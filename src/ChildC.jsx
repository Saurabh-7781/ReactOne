import React, { useContext } from 'react'
import { data,data1 } from "./App"

export default function ChildC() {
    const name = useContext(data)
    const age = useContext(data1)
  return (
    <>
      <h2>Child C</h2>
      <h3>My name is {name} and Age is {age}</h3>
    </>
  )
}
