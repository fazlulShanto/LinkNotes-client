import { AlignLeftIcon } from "lucide-react";
import useBodyScroll from "../hooks/useBodyScroll";
import CheckBoxListNotes from "./noteCards/CheckBoxListNotes";
import TextNote from "./noteCards/TextNote";
import UrlNotes from "./noteCards/UrlNotes";
import React from "react";

export default function NotesCard({ notesData }) {
    const noteType = notesData.type;
    const renderNoteUi = () => {
        switch (noteType) {
            case "text":
                return <TextNote notesData={notesData} />;
            case "url":
                return <UrlNotes notesData={notesData} />;
            case "checkList":
                return <CheckBoxListNotes notesData={notesData} />;
            default:
                return null;
        }
    };
    return renderNoteUi();
}
