import React from "react";

export default function TextNote({ notesData }) {
    return <p>{notesData.noteContent.value.slice(100)}</p>;
}
