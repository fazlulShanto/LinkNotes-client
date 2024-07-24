import React from "react";

function NoteTypeSelect({
    noteData,
    shouldDisable = false,
    handleNotedataChanges,
}) {
    return (
        <select
            disabled={shouldDisable}
            name="note-type"
            defaultValue={"text"}
            value={noteData.type}
            onChange={handleNotedataChanges}
            className="select disabled:bg-slate-900 disabled:text-white font-medium text-lg focus:outline-none focus:border-green-500 select-md  bg-primary border-neutral text-white"
        >
            <option value="text">Text</option>
            <option value="checkList">Check List</option>
            <option value="url">URL</option>
        </select>
    );
}

export default NoteTypeSelect;
