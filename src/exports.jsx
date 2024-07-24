import Dashboard from "./pages/Dashboard";
import SignUP from "./pages/SignUp.jsx";
import Login from "./pages/LogIn.jsx";
import appRouter from "./utils/Router.jsx";
import { baseUrl } from "./lib/axios.js";
import ApiEndpoints from "./utils/ApiEndpoints.js";
import {
    signUpService,
    signInService,
    verifyUser,
} from "./services/authService.js";
import { toast } from "sonner";
import Loader from "./components/loader/index.jsx";
import { useNavigate } from "react-router-dom";
import { stateActions, useAppContext } from "./hooks/useAppContext.jsx";
import { cn } from "./utils/utilities.js";

export {
    cn,
    appRouter,
    Dashboard,
    SignUP,
    Login,
    baseUrl,
    ApiEndpoints,
    toast,
    useNavigate,
    Loader,
    verifyUser,
    stateActions,
    useAppContext,
};

//services
export { signUpService, signInService };
