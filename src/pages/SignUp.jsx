import React from "react";
import { Mail } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { signUpService, toast, Loader, useNavigate } from "../exports";
import { useState } from "react";

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
                toast.success("Successfully Signed Up!");
                navigator("/dashboard");
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
        <div className="w-screen h-screen flex justify-center px-4 items-center bg-slate-900">
            <div className="sm:max-w-lg rounded-xl w-full h-auto flex flex-col gap-6 py-4 shadow-2xl bg-slate-800 text-center">
                <h1 className="text-3xl py-2">Sign Up</h1>
                <hr className="w-11/12 hidden sm:w-7/12 self-center border-slate-600" />

                <form
                    className="flex flex-col gap-8 px-4"
                    onSubmit={handleFormSubmit}
                >
                    <div className="flex justify-center gap-2  rounded-xl">
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
                    </div>

                    <div className="flex justify-center gap-2 rounded-xl">
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
                    </div>

                    <div className="flex justify-center gap-2 rounded-xl">
                        <Mail size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="email"
                            name="email"
                            maxLength={50}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex justify-center gap-2 rounded-xl">
                        <LockKeyhole size={24} className="text-sky-500" />
                        <input
                            className="input-field"
                            type="password"
                            name="password"
                            minLength={4}
                            maxLength={32}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-slate-300 px-10 font-semibold h-10 rounded-full self-center text-slate-800 hover:bg-sky-700 hover:text-white"
                    >
                        Sing In
                    </button>
                </form>
                <p className="text-sm space-x-1">
                    <span className=" italic">
                        {"Already have an account? "}
                    </span>
                    <Link to={"/signin"} className="text-sky-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
