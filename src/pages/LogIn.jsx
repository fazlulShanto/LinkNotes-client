import React from "react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    signInService,
    toast,
    useAppContext,
    useNavigate,
    stateActions,
    verifyUser,
} from "../exports";
import BrandLogo from "../components/BrandLogo";
import { appName, developerInfo, LOCAL_STORAGE_TOKEN } from "../utils/Contents";
import { useEffect } from "react";
import { useId } from "react";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const [session, setSession] = useState(useId());
    const navigator = useNavigate();
    const { dispatch } = useAppContext();

    const handleLogin = async () => {
        setShowLoader(true);
        try {
            const response = await signInService({ email, password });
            const { userData, token } = response?.data?.dataSource;
            localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
            dispatch({
                action: stateActions.updateUserInfo,
                data: userData,
            });
            navigator("/dashboard");
        } catch (error) {
            let message = error.response?.data?.message;
            if (Array.isArray(message)) {
                message.forEach((v) => {
                    toast.error(v?.msg);
                });
            } else {
                toast.error("Failed to Log In! please try again");
            }
        } finally {
            setShowLoader(false);
        }
    };

    useEffect(() => {
        verifyUser().then(() => {
            navigator("/dashboard");
        });
    }, [session]);

    return (
        <div className="w-screen relative text-gray-300 h-screen flex justify-center px-4 items-center bg-slate-900">
            <div className="rounded-xl sm:card-box-shadow w-full sm:w-[400px] h-auto flex flex-col gap-8 py-4 text-center pt-8">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <BrandLogo />
                            </div>
                        </div>
                        <p className="text-3xl font-medium">{appName}</p>
                    </div>
                    <p className="text-sm italic">
                        Notes, Checklists, and Bookmarks - Your Way!
                    </p>
                </div>

                <h1 className="text-3xl py-2 font-bold">Sign in</h1>

                <div className="flex flex-col gap-8 px-4 w-full">
                    <label className="input border border-gray-600 focus:outline-none focus:border-none focus-within:outline-sky-400 bg-transparent flex gap-2 py-2 rounded-xl">
                        <Mail size={28} className="text-sky-500" />
                        <input
                            className="w-full bg-transparent placeholder:text-gray-500 px-2 text-gray-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>
                    <div className="space-y-3">
                        <label className="input border border-gray-600 focus:outline-none focus:border-none focus-within:outline-sky-400 bg-transparent flex gap-2 py-2 rounded-xl">
                            <LockKeyhole size={28} className="text-sky-500" />
                            <input
                                className="bg-transparent w-full border-0 placeholder:text-gray-500 px-2 focus:border-b-slate-500 focus:outline-none  text-gray-400"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </label>
                        <p className="text-right text-sky-600">
                            <Link to={"/recover-password"}>
                                Forgot password?
                            </Link>
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-sky-700 w-full px-10 font-semibold h-10 flex justify-center items-center gap-2 rounded-full self-center text-white"
                    >
                        {showLoader ? (
                            <span className="loading loading-spinner text-primary"></span>
                        ) : null}
                        <span className="font-medium text-lg">Sign In</span>
                    </button>
                </div>

                <p className="text-base space-x-1">
                    <span className="text-gray-400">
                        {"Don't have an account? "}
                    </span>
                    <Link to={"/sign-up"} className="w-full text-sky-400">
                        Sign Up
                    </Link>
                </p>
            </div>

            <footer className="absolute bottom-4">
                <p>
                    Made with 💗 by{" "}
                    <a
                        target="_blank"
                        rel="noopener"
                        href={developerInfo.github}
                        className="link link-success"
                    >
                        {developerInfo.name}
                    </a>
                    &copy;
                    {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
