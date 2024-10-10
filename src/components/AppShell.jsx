import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { useEffect } from "react";
import {
    useAppContext,
    useNavigate,
    verifyUser,
    stateActions,
    cn,
} from "../exports";
import { PlusCircleIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateNotesModal from "./CreateNoteModal";
import FilterSidebar from "./filter-sidebar";
import { PlusIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { signOutService } from "../services/authService";

export default function AppShell() {
    // check if user authenticated
    const { state, dispatch } = useAppContext();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        const checker = async () => {
            try {
                if (state.userInfo.userId.length > 5) {
                    return;
                }
                // get user info
                const info = await verifyUser();
                dispatch({
                    action: stateActions.updateUserInfo,
                    data: info,
                });
            } catch (error) {
                // if failed, logout user
                signOutService();
                dispatch({
                    action: stateActions.updateUserInfo,
                    data: {},
                });
                localStorage.clear();
                navigator("/sign-in");
            }
        };
        checker();
    }, []);

    const bottomMenuIconSize = 24;
    return (
        <div className="flex flex-col gap-2 w-full h-screen bg-primary">
            <div className="h-full sm:flex sm:flex-col sm:px-4  overflow-y-auto">
                <AppHeader userAvatarUrl={state.userInfo.avatarUrl} />
                <Outlet />
            </div>
            <div className="sticky sm:hidden bottom-1 h-fit w-[95%] mx-auto rounded-full flex items-center justify-between bg-black py-2 px-4">
                <Link
                    to={"dashboard"}
                    className={cn("p-2 rounded-full", {
                        "bg-sky-950": location.pathname === "/dashboard",
                    })}
                >
                    <HomeIcon
                        className={cn("text-sky-400")}
                        size={bottomMenuIconSize}
                    />
                </Link>
                <Link
                    to={"/pinned-notes"}
                    className={cn("p-2 rounded-full", {
                        "bg-sky-950": location.pathname === "/pinned-notes",
                    })}
                >
                    <PinIcon
                        className="rotate-45 text-sky-400"
                        size={bottomMenuIconSize}
                    />
                </Link>
                <button onClick={() => setIsModalOpen(true)}>
                    <PlusCircleIcon
                        className="text-sky-400"
                        size={bottomMenuIconSize}
                    />
                </button>

                {/* <button className="">
                    <FilterIcon className="" size={bottomMenuIconSize} />
                </button> */}
                <FilterSidebar isMobile />
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
