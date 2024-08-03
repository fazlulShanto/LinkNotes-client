import { useEffect } from "react";
import { getUserAllNotes } from "../services/notesService";
import { useState } from "react";
import { toast } from "../exports.jsx";

export default function useDashboard() {
    const [loading, setLoading] = useState(false);
    const [userNoteList, setUserNoteList] = useState([]);
    useEffect(() => {
        setLoading(true);
        const fetcher = async () => {
            try {
                const data = await getUserAllNotes();
                setUserNoteList(data?.dataSource?.notes ?? []);
            } catch (error) {
                toast.error("Failed to fetch user notes!");
            } finally {
                setLoading(false);
            }
        };
        fetcher();
    }, []);

    return {
        loading,
        setLoading,
        userNoteList,
        setUserNoteList,
    };
}
