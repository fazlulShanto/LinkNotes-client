import React from "react";

function NoteTypeSelect({
    noteData,
    setNoteData,
    shouldDisable = false,
    handleNotedataChanges,
}) {
    const handleOnChange = (e) => {
        handleNotedataChanges(e);
        setNoteData((old) => {
            const newState = structuredClone(old);
            let tags = newState["tags"];
            if (Array.isArray(tags) && tags.length) {
                // replace first tag
                tags[0] = `${e.target.value}`;
            } else {
                tags = [`${e.target.value}`];
            }
            return { ...newState, tags };
        });
    };

    return (
        <div className="flex flex-col w-full gap-2 sm:gap-3 bg-primary p-2 rounded-lg">
            <label htmlFor="note-type" className="text-sm sm:text-base">
                Select a note type
            </label>
            <select
                id="note-type"
                disabled={shouldDisable}
                name="note-type"
                value={noteData.type}
                onChange={handleOnChange}
                className="select select-sm sm:select-md disabled:bg-slate-900 disabled:text-white font-medium text-sm sm:text-lg focus:outline-none focus:border-green-500 select-md  bg-primary border-neutral text-white"
            >
                <option value="text">Text</option>
                <option value="checkList">Check List</option>
                <option value="url">URL</option>
            </select>
        </div>
    );
}

export default NoteTypeSelect;
