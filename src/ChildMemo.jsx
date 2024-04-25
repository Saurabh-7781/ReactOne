import { memo } from 'react'

 function ChildMemo() {
    console.log("childMemo")
  return (
    <>
      <h1>Memo</h1>
    </>
  )
}

export default memo(ChildMemo)
