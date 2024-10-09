import { createBrowserRouter } from "react-router-dom";
import { AllTasks, CompletedTasks, PendingTasks, Todo } from "./pages";


export const router = createBrowserRouter(
    [
        {
            path: "",
            element: <Todo />,
            children: [
                { path: "/all", element: <AllTasks /> },
                { path: "pending", element: <PendingTasks /> },
                { path: "completed", element: <CompletedTasks /> },
            ],
        },
        {
            path: "/home",
            element: <h1>Home</h1>
        },
    ]
);
