/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import GreetingsCard from "../components/GreetingsCard";
import NotesCard from "../components/NotesCard";

import { useAppContext, stateActions, Loader } from "../exports";
import useDashboard from "../hooks/useDashboard";
import { PlusCircleIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { PinIcon } from "lucide-react";

export default function Dashboard() {
    const { state, dispatch } = useAppContext();
    const { userNoteList, loading } = useDashboard();
    if (loading) {
        return (
            <div className="w-full flex flex-col h-full justify-center items-center">
                <Loader />
            </div>
        );
    }
    return (
        <div className="w-full  p-2 flex flex-col gap-2">
            <div className="flex w-full flex-col justify-between sm:flex-row gap-2">
                <GreetingsCard userInfo={state.userInfo} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cent w-full gap-2">
                {userNoteList.map((data, idx) => (
                    <div key={idx + data.noteTitle}>
                        <NotesCard notesData={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}
