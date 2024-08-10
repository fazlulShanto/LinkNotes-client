import { appName } from "../utils/Contents";
import defaultUser from "../assets/defaultUser.jpg";
import AppLogo from "../assets/appLogoWithoutBG.png";
import { PlusCircleIcon } from "lucide-react";
import { PinIcon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import CreateNotesModal from "./CreateNoteModal";
import { validateNoteInput } from "../utils/utilities";

export default function AppHeader({ userAvatarUrl }) {
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
                <img className="w-[36px] sm:w-16" src={AppLogo} />
            </div>
        );
    };

    const handleAddNewNotes = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-primary flex w-full justify-between items-center gap-2 py-3 md:py-4 px-4 rounded-md sm:sticky sm:top-0 sm:z-50">
            {renderAppLogo()}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-100">
                {appName}
            </h1>

            <div className="flex flex-grow  justify-end gap-4 items-center">
                <div className="hidden sm:flex sm:gap-2">
                    <button
                        onClick={handleAddNewNotes}
                        className="btn bg-slate-700"
                    >
                        <PlusCircleIcon />
                    </button>
                    <button className="btn bg-slate-700">
                        <PinIcon className="rotate-45" />
                    </button>
                    <button className="btn bg-slate-700">
                        <FilterIcon />
                    </button>
                </div>
                {renderAvatar()}
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
