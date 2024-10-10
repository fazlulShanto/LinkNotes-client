import React, { useState } from "react";
import AppLogo from "../assets/appLogoWithoutBG.png";
import { appName } from "../utils/Contents";
import LandingAnimations from "../assets/landing-animation.webm";
import { NotebookPen } from "lucide-react";
import { Tag } from "lucide-react";
import { Pin } from "lucide-react";
import { SearchCheck } from "lucide-react";
import { Link } from "react-router-dom";
const directLink = "http://88.198.37.107:4019";
export default function LandingPage() {
    console.log(`🛑 rending LandingPage`, import.meta.env);

    return (
        <div className="w-screen h-screen relative bg-primary flex flex-col gap-6">
            <header className="flex flex-col items-center pt-6 sm:pt-12 text-gray-100 leading-5 gap-4 sm:gap-1">
                <div className="font-medium text-2xl sm:text-4xl">
                    Welcome to
                </div>

                <div className="flex sm:flex-col items-center sm:gap-2 sm:mt-2">
                    <div className=" mr-1">
                        <img className="w-12 sm:w-20" src={AppLogo} />
                    </div>
                    <span className="font-bold text-4xl sm:text-6xl">
                        {appName}
                    </span>
                </div>
                <p className="italic text-sm sm:text-base">
                    Notes, Checklists, and Bookmarks - Your Way!
                </p>
            </header>

            <main className="flex h-full sm:h-auto flex-col sm:flex-row gap-8">
                <section className="sm:w-1/2">
                    <video
                        id="coin-video"
                        playsInline
                        muted
                        autoPlay
                        loop
                        preload="metadata"
                        className="w-1/2 m-auto md:p-4 md:max-w-[360px] max-h-[360px] md:max-h-full md:pb-4 pb-25 mt-4"
                    >
                        <source
                            id="video-source"
                            src={LandingAnimations}
                            type="video/webm"
                        />
                        Your browser does not support the video tag.
                    </video>
                </section>

                <section
                    id="features"
                    className="grid grid-cols-2 gap-2 sm:gap-8 px-3"
                >
                    <div className="bg-[#FDF777] text-black rounded-lg p-3 sm:p-10 sm:h-fit">
                        <div className="w-full space-y-3">
                            <p className="text-md flex gap-1 font-bold justify-center">
                                <NotebookPen /> <span>Note It</span>
                            </p>
                            <p className="text-center">
                                Create 3 types of notes.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#23D2B1] text-black rounded-lg p-3  sm:p-10 sm:h-fit">
                        <div className="w-full space-y-3">
                            <p className="text-md flex gap-1 font-bold justify-center">
                                <Tag /> <span>Tag It</span>
                            </p>
                            <p className="text-center">
                                Add up to 10 tags to each note.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#D7F8F2] text-black rounded-lg p-3  sm:p-10 sm:h-fit">
                        <div className="w-full space-y-3">
                            <p className="text-md flex gap-1 font-bold justify-center">
                                <Pin className="rotate-45" />{" "}
                                <span>Pin It</span>
                            </p>
                            <p className="text-center">
                                Pin your important notes.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#EB7A52] text-black rounded-lg p-3  sm:p-10 sm:h-fit">
                        <div className="w-full space-y-3">
                            <p className="text-md flex gap-1 font-bold justify-center">
                                <SearchCheck /> <span>Find It</span>
                            </p>
                            <p className="text-center">Find you notes fast.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer
                id="cta"
                className="flex w-full justify-around sm:justify-center sm:gap-24 sm:mt-8"
            >
                <Link to={"/sign-in"}>
                    <button
                        type="button"
                        className="btn btn-primary px-12 btn-outline sm:btn-wide sm:btn-lg"
                    >
                        Sign In
                    </button>
                </Link>
                <Link to={"/sign-up"}>
                    <button
                        type="button"
                        className="btn btn-primary px-12 border-none bg-[#0369A1] hover:bg-[#0369A1] text-white sm:btn-wide sm:btn-lg"
                    >
                        Sign Up
                    </button>
                </Link>
            </footer>
            <div className="flex h-fit gap-2 sm:mt-auto w-full justify-center ">
                <Link
                    className="text-xs hover:text-yellow-300 font-medium"
                    to={"/faq"}
                >
                    FAQ
                </Link>
                <span className="h-3 self-center  w-0.5 rounded-lg border bg-gray-300"></span>
                <a
                    target="_blank"
                    className="hover:text-yellow-300 w-fit  text-xs font-medium"
                    href={directLink}
                >
                    Direct Link
                </a>
            </div>
        </div>
    );
}
