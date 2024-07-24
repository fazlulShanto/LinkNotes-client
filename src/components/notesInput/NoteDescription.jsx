import React from "react";

function NoteDescription({
    noteData,
    shouldDisable = false,
    handleNotedataChanges,
}) {
    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg ">
            <label htmlFor="description">Description</label>
            <textarea
                type="text"
                rows={4}
                name="note-description"
                id="description"
                placeholder="Enter note description"
                value={noteData.description}
                onChange={handleNotedataChanges}
                className="input-field  border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-2 text-zinc-300"
            />
        </div>
    );
}

export default NoteDescription;
