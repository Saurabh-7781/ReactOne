import React, { useState } from "react";

const StateProps = (props)=>{
    const [name,setName] = useState("Saurabh")
    const [Age,setAge] = useState(21)
    const clr = {
        color:'blue'
    }
    const changeNam = ()=>{
        setName("mihir kamani")
    }
    const changeNam2 = () =>{
         setAge("My age is 23")
    }
    return(
        <div>
            <h3 style={clr}>This is My Second Component - {name}</h3>
            <h3 style={clr}>My Age is  - {Age}</h3>
            <button onClick={changeNam}>Change</button>
            <button onClick={changeNam2}>ADD AGE</button>
            <button onClick={()=>setName("Saurabh")}>reset</button>
            <button onClick={()=>setAge(21)}>first</button>

        </div>
    )
}

export default StateProps;