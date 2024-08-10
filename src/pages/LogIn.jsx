import React from "react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Loader,
    signInService,
    toast,
    useAppContext,
    useNavigate,
    stateActions,
} from "../exports";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const navigator = useNavigate();
    const { dispatch } = useAppContext();

    const handleLogin = async () => {
        setShowLoader(true);
        try {
            const response = await signInService({ email, password });
            const {
                data: {
                    dataSource: { userData },
                },
            } = response;
            dispatch({
                action: stateActions.updateUserInfo,
                data: userData,
            });
            navigator("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data?.message ??
                    "Failed to Log In! please try again"
            );
        } finally {
            setShowLoader(false);
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center px-4 items-center bg-slate-900">
            <div className="rounded-xl w-full sm:max-w-xs h-auto flex flex-col gap-6 py-4 shadow-2xl bg-slate-800 text-center">
                <h1 className="text-3xl py-2">Sign In</h1>
                <hr className="w-11/12 hidden sm:w-7/12 self-center border-slate-600" />

                <div className="flex flex-col gap-8 px-4">
                    <div className="flex justify-center gap-2  py-2 rounded-xl">
                        <Mail size={20} className="text-sky-500" />
                        <input
                            className="bg-transparent  sm:w-auto placeholder:text-gray-500 border-0 fcous:border-b px-2 focus:border-b-slate-500 focus:outline-none focus:border-b text-gray-400"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex justify-center gap-2  py-2 rounded-xl">
                        <LockKeyhole size={20} className="text-sky-500" />
                        <input
                            className="bg-transparent  sm:w-auto border-0 placeholder:text-gray-500 fcous:border-b px-2 focus:border-b-slate-500 focus:outline-none focus:border-b text-gray-400"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-slate-300 px-10 font-semibold h-10 flex items-center gap-2 rounded-full self-center text-slate-800 hover:bg-sky-700 hover:text-white"
                    >
                        {showLoader ? (
                            <span className="loading loading-spinner text-primary"></span>
                        ) : null}
                        Sing In
                    </button>
                </div>
                <p className="text-sm space-x-1">
                    <span className=" italic">{"Don't have an account? "}</span>
                    <Link to={"/signup"} className="text-sky-500">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
