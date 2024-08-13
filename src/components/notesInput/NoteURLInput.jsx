import React from "react";

function NoteURLInput({
    noteData,
    shouldDisable = false,
    handleNotedataChanges,
}) {
    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg ">
            <label htmlFor="url" className="text-sm sm:text-base">
                URL
            </label>
            <input
                type="text"
                name="note-url"
                id="url"
                maxLength={2048}
                placeholder="Enter the URL"
                value={noteData.url}
                onChange={handleNotedataChanges}
                className="input-field text-sm sm:text-base  border border-sky-800 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md py-2 text-zinc-300"
            />
        </div>
    );
}

export default NoteURLInput;
