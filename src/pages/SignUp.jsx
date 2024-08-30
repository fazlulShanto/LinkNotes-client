import React from "react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { signUpService, toast, Loader, useNavigate } from "../exports";
import { useState } from "react";
import BrandLogo from "../components/BrandLogo";
import { appName, developerInfo } from "../utils/Contents";

export default function SignUp() {
    const [showLoader, setShowLoader] = useState(false);
    const navigator = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
        };
        setShowLoader(true);

        signUpService(data)
            .then((data) => {
                toast.success("Successfully created new account!");
                navigator("/sign-in");
                setShowLoader(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to Sign Up! please try again");
            })
            .finally(() => {
                setShowLoader(false);
            });
    };

    if (showLoader) {
        return (
            <div className="w-screen h-screen flex justify-center px-4 items-center bg-slate-900">
                <Loader />
            </div>
        );
    }

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

                <h1 className="text-3xl py-2 font-bold">
                    Create a new account!
                </h1>

                <form
                    className="flex flex-col gap-8 px-4 w-full"
                    onSubmit={handleFormSubmit}
                >
                    <label className="input-label">
                        <User size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="text"
                            required
                            minLength={2}
                            maxLength={32}
                            name="firstName"
                            placeholder="First name"
                        />
                    </label>

                    <label className="input-label">
                        <User size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="text"
                            required
                            name="lastName"
                            minLength={2}
                            maxLength={32}
                            placeholder="Last name"
                        />
                    </label>

                    <label className="input-label">
                        <Mail size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="email"
                            name="email"
                            maxLength={50}
                            required
                            placeholder="Enter your email"
                        />
                    </label>

                    <label className="input-label">
                        <LockKeyhole size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="password"
                            name="password"
                            minLength={4}
                            maxLength={32}
                            required
                            placeholder="Enter your password"
                            autoComplete="off"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-sky-700 text-lg w-full px-10 font-semibold h-10 flex justify-center items-center gap-2 rounded-full self-center text-white"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-base space-x-1">
                    <span className="text-gray-400">
                        {"Already have an account? "}
                    </span>
                    <Link to={"/sign-in"} className="w-full text-sky-400">
                        Sign In
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
