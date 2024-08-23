import { StrictMode } from 'react'
import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const style = {
  color: "red",
  fontSize: "50px",
};



// Home page
function Component1() {
  return <main>
    <h2>Welcome to the Component1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque doloremque tempore, possimus laboriosam quaerat velit aperiam optio rem sed corporis ea eius quis vel vero molestiae amet debitis in.</p>
  </main>
}

// About us

function Component2() {
  return <main>
    <h2>Welcome to the Component2</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque doloremque tempore, possimus laboriosam quaerat velit aperiam optio rem sed corporis ea eius quis vel vero molestiae amet debitis in.</p>
  </main>
}


// Functional Component
function App() {
  return <Fragment>
    <h1 style={style}>Hello JSX</h1>
    <Component1 />
    <Component2 />
  </Fragment>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


