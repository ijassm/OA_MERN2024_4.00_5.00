import './App.css'
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"

const data1 = "hello react"
const data2 = "hello node"


function App() {

  return <>
    <Component1 data1={data1} data2={data2} />
    <Component2 />
    <Component3 data1={data1} data2={data2} />
  </>
}

export default App


