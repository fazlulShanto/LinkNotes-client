import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./Sheet.jsx";
import { useAppContext, useNavigate, toast } from "../exports.jsx";
import { UserCogIcon } from "lucide-react";
import { LogOut } from "lucide-react";
import { signOutService } from "../services/authService.js";
import { FilePlusIcon } from "lucide-react";
import ImageUploader from "./FileUploader.jsx";

function AppSidebar() {
    const { state } = useAppContext();
    const userInfo = state.userInfo;
    const userAvatarUrl = userInfo.avatarUrl;
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        signOutService()
            .then((res) => {
                if (res) {
                    toast.success(`Successfully signed-out!`);
                    navigate("/");
                }
            })
            .catch((er) => {
                toast.error("Failed to sign out! please try agian.");
            });
    };

    const renderAvatar = () => {
        return (
            <div className="avatar mr-1">
                <div className="ring-primary ring-offset-accent-100 size-8 md:size-10 rounded-full ring ring-offset-2">
                    <img alt="user-avatar" src={userAvatarUrl} />
                </div>
            </div>
        );
    };
    return (
        <Sheet>
            <SheetTrigger asChild className="cursor-pointer">
                {renderAvatar()}
            </SheetTrigger>

            <SheetContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="bg-slate-800 border-none flex flex-col gap-2 h-full shadow-lg w-2/3 sm:w-1/2 border border-yellow-300 text-gray-200"
            >
                <SheetHeader>
                    <SheetTitle className={"flex gap-4 items-center"}>
                        {renderAvatar()}
                        <p className="font-normal">{userInfo.firstName}</p>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex w-full flex-grow flex-col justify-between">
                    <div className="w-full h-auto">
                        <ImageUploader profilePhoto={userAvatarUrl} />
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="btn btn-ghost w-full font-medium hover:text-sky-300 self-baseline"
                    >
                        <LogOut />
                        Sign-Out
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default AppSidebar;
