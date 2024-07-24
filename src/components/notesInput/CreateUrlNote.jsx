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
            <NoteTypeSelect
                noteData={noteData}
                shouldDisable={shouldDisable}
                handleNotedataChanges={handleNotedataChanges}
            />
            <NoteTitle
                noteData={noteData}
                shouldDisable={shouldDisable}
                handleNotedataChanges={handleNotedataChanges}
            />
            <NoteURLInput
                noteData={noteData}
                shouldDisable={shouldDisable}
                handleNotedataChanges={handleNotedataChanges}
            />
            <AddTags
                noteData={noteData}
                setNoteData={setNoteData}
                shouldDisable={shouldDisable}
            />
        </div>
    );
}

export default CreateUrlNote;
