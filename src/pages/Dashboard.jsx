/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import GreetingsCard from "../components/GreetingsCard";
import NotesCard from "../components/NotesCard";
import { useAppContext, Loader } from "../exports";
import useStore from "../utils/store";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
    const { state, dispatch } = useAppContext();
    const location = useLocation();
    console.log("🔥", location);
    const fetchUserNoteList = useStore.use.fetchUserNoteList();
    const userNoteList = useStore.use.noteList();
    const loading = useStore.use.isLoading();

    useEffect(() => {
        fetchUserNoteList();
    }, []);

    if (loading) {
        return (
            <div className="w-full flex flex-col h-full justify-center items-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="w-full sm:h-full sm:overflow-y-scroll p-2 flex flex-col gap-2">
            <div className="flex w-full flex-col justify-between sm:flex-row gap-2">
                <GreetingsCard userInfo={state.userInfo} />
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full space-y-3 gap-3">
                {userNoteList.map((data, idx) => (
                    <div key={idx + data.noteTitle}>
                        <NotesCard notesData={data} />
                    </div>
                ))}
            </div>
        </div>
    );
}
