import React from "react";
import { useState } from "react";

export default function CheckBoxListNotes({ notesData }) {
    const [checkboxList, setCheckboxList] = useState(
        notesData?.noteContent?.value.map((v) => ({
            isChecked: v.isChecked,
            text: v.text,
            id: Math.random().toString(30).slice(2),
        }))
    );

    const renderCheckbox = ({ isChecked, text, id }) => {
        return (
            <div key={id} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id={id}
                    className="checkbox checkbox-xs [--chkfg:white]  checkbox-success"
                    defaultChecked={isChecked}
                />
                <label htmlFor={id}> {text} </label>
            </div>
        );
    };

    return checkboxList.map((data) => renderCheckbox(data));
}
