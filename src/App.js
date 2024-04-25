
// import { createContext } from 'react';
import './App.css'
import ComponentCrud from './Component/ComponentCrud';
import SessionStorage from './Component/SessionStorage';
// import UseMemo from './UseMemo';
// import ChildMemo from './ChildMemo';
// import UseCallBack from './UseCallBack';
// import ChildA from './ChildA';
// import UseReducer from './UseReducer';


// const data = createContext()
// const data1 = createContext()
function App() {
  // const name = "Test";
  // const age = 25;
  return (
    <>
      {/* <UseCallBack/>
    <ChildMemo/> */}
      {/* <h2>useContext</h2>
      <data.Provider value={name}>
        <data1.Provider value={age}>
         <ChildA />
        </data1.Provider>
      </data.Provider>
      <hr/>
      <UseReducer/> */}
      {/* <ComponentCrud/> */}
      <ComponentCrud/>
    </>
  );
}

export default App;
// export {data,data1}
