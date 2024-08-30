import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { useEffect } from "react";
import {
    useAppContext,
    useNavigate,
    verifyUser,
    stateActions,
} from "../exports";
import { PlusCircleIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateNotesModal from "./CreateNoteModal";
import FilterSidebar from "./filter-sidebar";

export default function AppShell() {
    // check if user authenticated
    const { state, dispatch } = useAppContext();
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
                // if failed logout user
                navigator("/sign-in");
            }
        };
        checker();
    }, [state.userInfo.userId]);

    const bottomMenuIconSize = 28;
    return (
        <div className="flex flex-col gap-2 w-full h-screen bg-primary">
            <div className="h-full sm:flex sm:flex-col sm:px-4  overflow-y-auto">
                <AppHeader userAvatarUrl={state.userInfo.avatarUrl} />
                <Outlet />
            </div>
            <div className="sticky sm:hidden bottom-0 h-fit w-full bg-primary flex justify-between p-3">
                <Link to={"dashboard"}>
                    <HomeIcon className="" size={bottomMenuIconSize} />
                </Link>
                <button className="" onClick={() => setIsModalOpen(true)}>
                    <PlusCircleIcon className="" size={bottomMenuIconSize} />
                </button>
                <Link to={"/pinned-notes"}>
                    <PinIcon className="rotate-45" size={bottomMenuIconSize} />
                </Link>
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
