import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function AppShell() {
    return (
        <div className="flex flex-col gap-2 w-full h-screen bg-primary">
            <div className="sticky bg-inherit z-20 top-0">
                <AppHeader />
            </div>
            <div className="h-full">
                <Outlet />
            </div>
        </div>
    );
}
