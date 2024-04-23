import React from 'react'

 const SecComponent = (props) =>{
  return (
    <div>
      <h1 style={{color:"red",textAlign:"center"}}>This is the second Component</h1>
      <h2 style={{color:"blue",textAlign:"center"}}>My name is {props.dataName}</h2>
    </div>
  )
}

export default SecComponent;