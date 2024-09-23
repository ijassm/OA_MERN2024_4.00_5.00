import { useEffect } from "react";
import "./App.css";
import { Concepts } from "./pages/Concepts";


function App() {
  console.log('app started');

  useEffect(() => {
    console.log('use effect is called');
  })

  return (
    <>
      <Concepts />
    </>
  );
}

export default App;
