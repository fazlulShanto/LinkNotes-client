import { useMemo } from "react";
import { memo } from "react";

function UrlNotes({ notesData }) {
    console.log("url node 🔥", notesData?.noteTitle);
    return <p>{notesData.noteContent.value}</p>;
}
export default memo(UrlNotes);
