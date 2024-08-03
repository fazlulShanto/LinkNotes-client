import React from "react";
import NoteTypeSelect from "./NoteTypeSelect";
import NoteTitle from "./NoteTitle";
import NoteDescription from "./NoteDescription";
import AddTags from "./AddTags";
import InputBoxWithLimit from "../InputBoxWithLimit";
import { useState } from "react";

import { PlusIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";
function CreateCheckListNote({
    noteData,
    setNoteData,
    handleNotedataChanges,
    shouldDisable = false,
}) {
    const minLength = 2;
    const shouldDisableTagInput = shouldDisable;
    const [checkboxItemText, setCheckboxItem] = useState("");
    const handleAddNewCheckboxItem = () => {
        const newItem = {
            isChecked: false,
            text: checkboxItemText,
        };
        setNoteData((oldState) => {
            const cd = structuredClone(oldState);
            const checkList = cd["checkList"] ?? [];
            checkList.push(newItem);
            return { ...noteData, checkList: checkList };
        });
        setCheckboxItem("");
    };

    const handleDeleteListItem = (id) => {
        if (typeof id !== "number") {
            return;
        }
        setNoteData((oldState) => {
            const cd = structuredClone(oldState);
            const checkList = cd["checkList"] ?? [];
            const newList = checkList.filter((v, idx) => id !== idx);
            return { ...noteData, checkList: newList };
        });
    };

    const renderCheckList = () => {
        const checkboxList = noteData?.checkList ?? [];
        return (
            <div className="flex flex-col max-h-20 gap-2 p-1 overflow-y-auto">
                {checkboxList?.map((v, idx) => {
                    return (
                        <div
                            key={v + idx}
                            className="text-sm flex justify-between items-center max-h-8 p-1 bg-slate-800 leading-5 rounded-md px-2"
                        >
                            <span>{v?.text ?? null}</span>
                            <button
                                className="p-0 m-0"
                                onClick={() => handleDeleteListItem(idx)}
                            >
                                <Trash2Icon className="w-4 h-4 hover:text-red-600" />
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg">
            <div className="space-x-2">
                <label htmlFor="check-item">Checkbox Item</label>
                <span className="badge badge-info font-bold">
                    {noteData?.checkList?.length ?? 0}
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <InputBoxWithLimit
                    limit={64}
                    placeholder="Add new item"
                    value={checkboxItemText}
                    handleOnChange={(e) => {
                        setCheckboxItem(e.currentTarget.value);
                    }}
                    handleOnKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddNewCheckboxItem();
                        }
                    }}
                    id={"check-item"}
                />
                <button
                    className={`btn bg-slate-800 hover:bg-slate-600 ${shouldDisableTagInput ? "hidden" : ""}`}
                    onClick={handleAddNewCheckboxItem}
                    disabled={checkboxItemText.length < minLength}
                >
                    <PlusIcon />
                </button>
            </div>
            {renderCheckList()}
        </div>
    );
}

export default CreateCheckListNote;
