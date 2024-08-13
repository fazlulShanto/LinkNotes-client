import { appName } from "../utils/Contents";
import defaultUser from "../assets/defaultUser.jpg";
import AppLogo from "../assets/appLogoWithoutBG.png";
import { PlusCircleIcon } from "lucide-react";
import { PinIcon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import CreateNotesModal from "./CreateNoteModal";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { UserCogIcon } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOutService } from "../services/authService";
import { toast } from "../exports";

export default function AppHeader({ userAvatarUrl }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const renderAvatar = () => {
        return (
            <button>
                <div className="avatar mr-1">
                    <div className="ring-primary ring-offset-accent-100 size-8 md:size-10 rounded-full ring ring-offset-2">
                        <img src={userAvatarUrl || defaultUser} />
                    </div>
                </div>
            </button>
        );
    };
    const renderAppLogo = () => {
        return (
            <div className=" mr-1">
                <img className="w-[36px] sm:w-10" src={AppLogo} />
            </div>
        );
    };

    const handleAddNewNotes = () => {
        setIsModalOpen(true);
    };

    const handleSignOut = () => {
        signOutService()
            .then((res) => {
                if (res) {
                    toast.success(`Successfully signed-out!`);
                    navigate("/signin");
                }
            })
            .catch((er) => {
                toast.error("Failed to sign out! please try agian.");
            });
    };

    const renderProfilePopOver = () => {
        return (
            <Popover>
                <PopoverTrigger asChild>{renderAvatar()}</PopoverTrigger>
                <PopoverContent className="bg-slate-800 border-none flex flex-col gap-2 shadow-lg mt-2 mr-2 w-fit text-gray-100">
                    <button
                        onClick={() => navigate("/profile")}
                        className="btn btn-info btn-ghost font-medium hover:text-sky-300"
                    >
                        <UserCogIcon />
                        Edit Profile
                    </button>
                    <button
                        onClick={handleSignOut}
                        className="btn btn-ghost font-medium hover:text-sky-300 self-baseline"
                    >
                        <LogOut />
                        Sign-Out
                    </button>
                </PopoverContent>
            </Popover>
        );
    };

    return (
        <div className="bg-primary flex w-full justify-between items-center gap-2 py-4 md:py-4 px-2 rounded-md sm:sticky sm:top-0 sm:z-50">
            <div className="flex">
                {renderAppLogo()}
                <h1 className="text-xl sm:text-2xl font-bold text-gray-100">
                    {appName}
                </h1>
            </div>

            <div className="flex flex-grow  justify-end gap-4 items-center">
                <div className="hidden sm:flex sm:gap-2">
                    <button
                        onClick={handleAddNewNotes}
                        className="btn  hover:bg-sky-600 text-gray-200 bg-slate-700"
                    >
                        <PlusCircleIcon />
                    </button>
                    <button className="btn  hover:bg-sky-600 text-gray-200 bg-slate-700">
                        <PinIcon className="rotate-45" />
                    </button>
                    <button className="btn  hover:bg-sky-600 text-gray-200 bg-slate-700">
                        <FilterIcon />
                    </button>
                </div>
                {/* {renderAvatar()} */}
                {renderProfilePopOver()}
            </div>
            <CreateNotesModal
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                modalHeader={"Create a new note"}
                actionType="CREATE"
            />
        </div>
    );
}
