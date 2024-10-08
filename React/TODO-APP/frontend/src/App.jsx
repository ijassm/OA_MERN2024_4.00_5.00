import { RouterProvider } from "react-router-dom"
import { TodoProvider } from "./context/TodoContext.jsx"
import { router } from "./router.jsx"

function App() {
  return <TodoProvider>
    <RouterProvider router={router} />
  </TodoProvider>
}

export default App
