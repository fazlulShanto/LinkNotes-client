/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import GreetingsCard from "../components/GreetingsCard";
import NotesCard from "../components/NotesCard";
import { useAppContext, Loader, cn } from "../exports";
import useStore from "../utils/store";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyNotes from "../components/EmptyNotes";

export default function Dashboard() {
    const { state, dispatch } = useAppContext();
    const location = useLocation();
    const navigate = useNavigate();
    const [showClearFilter, setShowClearFilter] = useState(
        !!location.state?.fromFilter
    );
    const fetchUserNoteList = useStore.use.fetchUserNoteList();
    const fetchFilterNotes = useStore.use.fetchFilterNotes();
    const userNoteList = useStore.use.noteList();
    const loading = useStore.use.isLoading();
    const isEmptyNoteList = !(
        Array.isArray(userNoteList) && userNoteList.length > 0
    );
    useEffect(() => {
        if (location.state?.fromFilter) {
            fetchFilterNotes(location.search);
            setShowClearFilter(true);
        }
    }, [location.search]);

    useEffect(() => {
        fetchUserNoteList();
    }, []);

    const toggleClearFilter = () => {
        setShowClearFilter((o) => !o);
        fetchUserNoteList();
        navigate("/dashboard");
    };
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
                <button
                    className={cn("btn btn-info btn-outline", {
                        hidden: !showClearFilter,
                    })}
                    onClick={toggleClearFilter}
                >
                    Clear Filters
                </button>
            </div>

            {isEmptyNoteList ? (
                <EmptyNotes isFilterResult={showClearFilter} />
            ) : (
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 w-full space-y-3 gap-3">
                    {userNoteList.map((data, idx) => (
                        <div key={idx + data.noteTitle}>
                            <NotesCard notesData={data} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
