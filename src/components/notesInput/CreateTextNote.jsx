import React from "react";
import NoteTypeSelect from "./NoteTypeSelect";
import NoteDescription from "./NoteDescription";
import AddTags from "./AddTags";

function CreateTextNote({
    noteData,
    setNoteData,
    handleNotedataChanges,
    shouldDisable = false,
}) {
    return (
        <div className="flex flex-col gap-3">
            <NoteDescription
                noteData={noteData}
                shouldDisable={shouldDisable}
                handleNotedataChanges={handleNotedataChanges}
            />
        </div>
    );
}

export default CreateTextNote;
