import React from "react";
import NoteTypeSelect from "./NoteTypeSelect";
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
            id: Math.random().toString(32).slice(2),
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
            <div className="flex flex-col max-h-28 sm:max-h-28 gap-2 p-1 overflow-y-auto">
                {checkboxList?.map((v) => {
                    return (
                        <div
                            key={v.id}
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
        <div className="flex flex-col gap-1 sm:gap-2 bg-primary p-2 rounded-lg">
            <div className="space-x-2">
                <label htmlFor="check-item" className="text-sm sm:text-base">
                    Checkbox Item
                </label>
                <span className="badge badge-sm sm:badge-md badge-info font-bold">
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
                    className={`btn btn-sm sm:btn-md bg-green-800 text-white hover:bg-green-900 disabled:cursor-not-allowed ${shouldDisableTagInput ? "hidden" : ""}`}
                    onClick={handleAddNewCheckboxItem}
                    disabled={checkboxItemText.length < minLength}
                >
                    <PlusIcon className="size-4 sm:size-5" />
                </button>
            </div>
            {renderCheckList()}
        </div>
    );
}

export default CreateCheckListNote;
