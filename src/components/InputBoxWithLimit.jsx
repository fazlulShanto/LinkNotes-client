import React from "react";

export default function InputBoxWithLimit({
    value = "",
    placeholder = "Enter Input",
    limit = 16,
    handleOnChange,
    handleOnKeyDown,
    shouldDisableTagInput = false,
    id,
}) {
    return (
        <div className="w-full relative">
            <input
                type="text"
                id={id ?? ""}
                name={id ?? ""}
                value={value}
                placeholder={placeholder}
                maxLength={limit}
                onKeyDown={(e) => {
                    if (typeof handleOnKeyDown === "function") {
                        handleOnKeyDown(e);
                    }
                    return;
                }}
                onChange={handleOnChange}
                className={`input-field  border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-1 w-full  text-zinc-300 ${shouldDisableTagInput ? "hidden" : "visible"}`}
            />
            <div
                className={`absolute text-xs right-2 top-1.5 bg-green-900 rounded-md px-2 py-0.5 ${shouldDisableTagInput ? "hidden" : ""}`}
            >
                {value?.length ?? 0}/{limit}
            </div>
        </div>
    );
}
