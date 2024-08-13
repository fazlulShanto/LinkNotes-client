import { createBrowserRouter } from "react-router-dom";
import { Dashboard, SignUP, Login, Loader } from "../exports";
import AppShell from "../components/AppShell";
import LandingPage from "../pages/LandingPage";
import RecoverPassword from "../pages/RecoverPassword";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/signup",
        element: <SignUP />,
    },
    {
        path: "/signin",
        element: <Login />,
    },
    {
        path: "/recover-password",
        element: <RecoverPassword />,
    },
    {
        path: "/",
        element: <AppShell />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
