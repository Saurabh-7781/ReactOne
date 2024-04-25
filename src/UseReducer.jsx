import React, { useReducer } from 'react'

const initialState = {counter : 0}

function  reducer(state,action){
  switch(action.type){
        case 'increment':
          return{counter : state.counter  + 1}
        case 'decrement':
          return{counter : state.counter  - 1}
            default:
              return state;
  }
}

export default function UseReducer() {

  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
      <h2>UseReducer</h2>
      <h2>{state.counter}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </>
  )
}

