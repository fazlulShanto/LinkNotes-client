import { MoonIcon } from "lucide-react";
import { appName } from "../utils/Contents";
import HeaderSearchbar from "./HeaderSearchbar";
const defaultProfileUrl =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

export default function AppHeader({ profileUrl = defaultProfileUrl }) {
    const renderAvatar = () => {
        return (
            <div className="avatar">
                <div className="ring-primary ring-offset-accent-100 size-8 md:size-10 rounded-full ring ring-offset-2">
                    <img src={profileUrl} />
                </div>
            </div>
        );
    };

    return (
        <div className="flex  w-full justify-between items-center gap-2 py-3 md:py-4 px-4 rounded-md">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-100">
                {appName}
            </h1>
            <div className="flex flex-grow justify-end items-center gap-4">
                <HeaderSearchbar />

                <button className="border border-gray-300 p-2 rounded-full">
                    <MoonIcon size={20} />
                </button>
                {renderAvatar()}
            </div>
        </div>
    );
}
