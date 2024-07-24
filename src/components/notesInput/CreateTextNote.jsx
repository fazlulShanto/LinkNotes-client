import React from "react";
import NoteTypeSelect from "./NoteTypeSelect";
import NoteTitle from "./NoteTitle";
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
            <NoteDescription
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

export default CreateTextNote;
