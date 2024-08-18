import React from "react";
import { useState } from "react";
import NoteCardPopOverOptions from "../NoteCardPopOverOptions";
import { ListChecks } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";

const MAX_CHECKBOX_ITEM_IN_CARD = 5;

export default function CheckBoxListNotes({ notesData }) {
    const [checkboxList, setCheckboxList] = useState(
        notesData?.noteContent?.value
    );

    const renderCheckbox = ({ isChecked, text, id }) => {
        return (
            <div key={id} className="flex items-center gap-2">
                {/* <input
                    type="checkbox"
                    id={id}
                    className="checkbox checkbox-xs [--chkfg:white]  checkbox-success"
                    defaultChecked={isChecked}
                    disabled
                    style={{
                        opacity: 1,
                    }}
                /> */}
                {isChecked ? (
                    <CircleCheck className="size-4 text-emerald-500" />
                ) : (
                    <CircleX className="size-4 text-rose-500" />
                )}
                <label htmlFor={id}> {text} </label>
            </div>
        );
    };

    return (
        <div
            id={notesData._id}
            className="card p-2 rounded-md relative h-fit overflow-y-auto bg-[#263149] text-gray-300 min-w-[250px] flex w-full shadow-xl"
        >
            <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                    <ListChecks className="size-6 text-indigo-400 " />
                    <h2 className="font-medium text-base">Check List</h2>
                </div>
                <NoteCardPopOverOptions noteData={notesData} />
            </div>
            <div>
                {checkboxList
                    .slice(0, MAX_CHECKBOX_ITEM_IN_CARD)
                    .map((data) => renderCheckbox(data))}
            </div>
        </div>
    );
}
