import React, { useState } from 'react'

export default function Conditional() {
    const [age,setAge] =  useState(true)

     if (age){
         return(
            <h1>you Can Vote</h1>
         )
     } else {
        return(
            <h1>you Can't Vote</h1>
        )
     }
      
    //  element variable
     let a;
     if(age){
        a = <h2>You can vote</h2>
     } else {
        a = <h2>You can't Vote</h2>
     }

     return(
        <div>
            {a}
        </div>
     )

    //  ternary operator
    return (
        <>
        
        </>
    )

}
