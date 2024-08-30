import { createBrowserRouter } from "react-router-dom";
import { Dashboard, SignUP, Login, Loader } from "../exports";
import AppShell from "../components/AppShell";
import LandingPage from "../pages/LandingPage";
import RecoverPassword from "../pages/RecoverPassword";
import PinnedNotes from "../pages/PinnedNotes";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/sign-up",
        element: <SignUP />,
    },
    {
        path: "/sign-in",
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
    {
        path: "/",
        element: <AppShell />,
        children: [
            {
                path: "/pinned-notes",
                element: <PinnedNotes />,
            },
        ],
    },
]);

export default router;
