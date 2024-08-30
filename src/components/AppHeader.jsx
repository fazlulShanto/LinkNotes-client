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
import { cn, toast, useAppContext } from "../exports";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./Sheet";
import AppSidebar from "./AppSidebar";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import FilterSidebar from "./filter-sidebar";
import { useLocation } from "react-router-dom";

export default function AppHeader() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const renderAppLogo = () => {
        return (
            <div className=" mr-1">
                <img
                    className="w-[36px] sm:w-10"
                    alt="app logo"
                    src={AppLogo}
                />
            </div>
        );
    };

    const handleAddNewNotes = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="bg-primary flex w-full justify-between items-center gap-2 py-4 md:py-4 px-2 rounded-md sm:sticky sm:top-0 sm:z-50">
            <div className="flex items-center">
                {renderAppLogo()}
                <h1 className="text-xl sm:text-2xl font-bold text-gray-100">
                    {appName}
                </h1>
            </div>
            {/* Desktop view header buttons */}
            <div className="flex flex-grow  justify-end gap-4 items-center">
                <div className="hidden sm:flex sm:gap-2">
                    <Link
                        className={cn(
                            "btn hover:bg-sky-600 text-gray-200 bg-slate-700",
                            {
                                "bg-sky-700": location.pathname == "/dashboard",
                            }
                        )}
                        to={"dashboard"}
                    >
                        <HomeIcon className="" size={24} />
                        <span>Home</span>
                    </Link>
                    <button
                        onClick={() => navigate("/pinned-notes")}
                        className={cn(
                            "btn hover:bg-sky-600 text-gray-200 bg-slate-700",
                            {
                                "bg-sky-700":
                                    location.pathname == "/pinned-notes",
                            }
                        )}
                    >
                        <PinIcon className="rotate-45" />
                        <span>Pinned notes</span>
                    </button>
                    <button
                        onClick={handleAddNewNotes}
                        className="btn  hover:bg-sky-600 text-gray-200 bg-slate-700"
                    >
                        <PlusCircleIcon />
                        <span>New note</span>
                    </button>
                    <FilterSidebar />
                </div>
                {/* {renderAvatar()} */}
                {/* {renderProfilePopOver()} */}
                <AppSidebar />
            </div>
            {isModalOpen ? (
                <CreateNotesModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    modalHeader={"Create a new note"}
                    actionType="CREATE"
                />
            ) : null}
        </div>
    );
}
