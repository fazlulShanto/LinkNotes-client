import React from "react";
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
