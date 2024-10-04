import { createBrowserRouter } from "react-router-dom";
import { Todo } from "./pages/Todo/Todo";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Todo />,
            children: [
                { path: "all", element: <h1>About</h1> },
                { path: "pending", element: <h1>About</h1> },
                { path: "completed", element: <h1>About</h1> },
            ],
        },
        {
            path: "/home",
            element: <h1>Home</h1>
        },
    ]
);
