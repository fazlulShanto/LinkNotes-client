import React from "react";

function NoteURLInput({
    noteData,
    shouldDisable = false,
    handleNotedataChanges,
}) {
    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg ">
            <label htmlFor="url">URL</label>
            <input
                type="text"
                name="note-url"
                id="url"
                placeholder="Enter the URL"
                value={noteData.url}
                onChange={handleNotedataChanges}
                className="input-field  border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-2 text-zinc-300"
            />
        </div>
    );
}

export default NoteURLInput;
