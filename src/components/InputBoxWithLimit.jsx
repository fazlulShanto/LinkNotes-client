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
                className={`input-field text-sm sm:text-base border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-1 sm:py-2 w-full  text-zinc-300 ${shouldDisableTagInput ? "hidden" : "visible"}`}
            />
            <div
                className={`absolute text-xs sm:text-sm right-2 top-1.5 sm:top-2 bg-green-900 rounded-md px-2 sm:py-0.5 ${shouldDisableTagInput ? "hidden" : ""}`}
            >
                {value?.length ?? 0}/{limit}
            </div>
        </div>
    );
}
