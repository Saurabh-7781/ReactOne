import { useState } from 'react'
import ChildMemo from './ChildMemo'

export default function UseCallBack() {
    const [count, setCount] = useState(0)
    const [add,setAdd] = useState(5)

  return (
    <>
      <h1>UseCallback</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <ChildMemo/>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+10)}>Add</button>
    </>
  )
}
