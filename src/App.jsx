import { appRouter } from "./exports";
import { RouterProvider } from "react-router-dom";
function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;
