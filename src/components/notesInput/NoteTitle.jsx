import React from "react";

function NoteTitle({ noteData, shouldDisable = false, handleNotedataChanges }) {
    return (
        <div className="flex bg-primary p-2 rounded-lg flex-col gap-2">
            <label htmlFor="title">Note Title</label>
            <input
                disabled={shouldDisable}
                type="text"
                name="title"
                id="title"
                value={noteData.title}
                placeholder="Enter note title"
                onChange={handleNotedataChanges}
                className="input-field  border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-2 text-zinc-300"
            />
        </div>
    );
}

export default NoteTitle;
