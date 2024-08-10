import React from "react";

function NoteDescription({
    noteData = "",
    shouldDisable = false,
    handleNotedataChanges,
    limit = 2048,
}) {
    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg relative">
            <label htmlFor="description" className="text-sm sm:text-base">
                Description
            </label>
            <textarea
                type="text"
                rows={4}
                name="note-description"
                id="description"
                maxLength={limit}
                placeholder="Enter note description"
                value={noteData.description}
                onChange={handleNotedataChanges}
                className="input-field text-xs sm:text-base border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-2 text-zinc-300"
            />
            <span className="absolute text-xs sm:text-base right-4 bottom-4 bg-green-900 py-0.5 px-1 rounded-md">
                {noteData?.description?.length || 0}/{limit}
            </span>
        </div>
    );
}

export default NoteDescription;
