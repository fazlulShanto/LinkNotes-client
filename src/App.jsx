import { CheckCheckIcon } from "lucide-react";
import { appRouter } from "./exports";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { BadgeInfo } from "lucide-react";
import { OctagonXIcon } from "lucide-react";
import { ShieldAlertIcon } from "lucide-react";
import { Loader2Icon } from "lucide-react";
import "react-responsive-modal/styles.css";
import { AppContextProvider } from "./hooks/useAppContext";
function App() {
    return (
        <AppContextProvider>
            <Toaster
                closeButton={true}
                theme="dark"
                position="top-center"
                icons={{
                    success: <CheckCheckIcon className="text-green-500" />,
                    info: <BadgeInfo />,
                    warning: <OctagonXIcon />,
                    error: <ShieldAlertIcon className="text-red-500" />,
                    loading: <Loader2Icon />,
                }}
            />
            <RouterProvider router={appRouter} />
        </AppContextProvider>
    );
}

export default App;
