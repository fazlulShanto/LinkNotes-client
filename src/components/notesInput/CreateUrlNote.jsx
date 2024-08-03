import React from "react";
import NoteTypeSelect from "./NoteTypeSelect";
import NoteTitle from "./NoteTitle";
import NoteDescription from "./NoteDescription";
import AddTags from "./AddTags";
import NoteURLInput from "./NoteURLInput";
function CreateUrlNote({
    noteData,
    setNoteData,
    handleNotedataChanges,
    shouldDisable = false,
}) {
    return (
        <div className="flex flex-col gap-3">
            <NoteURLInput
                noteData={noteData}
                shouldDisable={shouldDisable}
                handleNotedataChanges={handleNotedataChanges}
            />
        </div>
    );
}

export default CreateUrlNote;
