import { createBrowserRouter } from "react-router-dom";
import { Dashboard, SignUP, Login } from "../exports";
import AppShell from "../components/AppShell";
import LandingPage from "../pages/LandingPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/signup",
                element: <SignUP />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "landing",
        element: <LandingPage />,
    },
]);

export default router;
