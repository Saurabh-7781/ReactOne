import { useState, useMemo } from 'react'

export default function UseMemo() {

    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(10)

    const multi = useMemo(() => {
        // console.log("multi Calling")
        return count * 5
    },[count]);

    const multi1 = useMemo(() =>{
        return count1 * 10
    },[count1])

  return (
    <>
    <h1>UseMeno</h1>
      <h2>{count}</h2>
      <h2>{multi}</h2>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <h1>{count1}</h1>
      <h1>{multi1}</h1>
      <button onClick={()=>setCount1(count1+1)}>Count1</button>
    </>
  )
}
