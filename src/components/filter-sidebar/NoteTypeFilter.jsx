import { ExternalLink } from "lucide-react";
import { ListChecks } from "lucide-react";
import { NotepadText } from "lucide-react";
import React from "react";
import { cn } from "../../exports";

function NoteTypeFilter({ filterState, isMobile, setFilterState }) {
    const iconSize = isMobile ? 16 : 20;

    const iconClassName = (value) =>
        cn("text-indigo-400", {
            "text-white": filterState?.noteType == value,
        });
    const noteTypes = [
        {
            label: "Text",
            value: "text",
            icon: (
                <NotepadText
                    size={iconSize}
                    className={iconClassName("text")}
                />
            ),
        },
        {
            label: "URL",
            value: "url",
            icon: (
                <ExternalLink
                    size={iconSize}
                    className={iconClassName("url")}
                />
            ),
        },
        {
            label: "Check List",
            value: "checkList",
            icon: (
                <ListChecks
                    size={iconSize}
                    className={iconClassName("checkList")}
                />
            ),
        },
    ];

    const handleNoteTypeSelect = (t) => {
        if (filterState.noteType === t) {
            t = "";
        }
        setFilterState((old) => ({
            ...old,
            noteType: t,
        }));
    };

    return (
        <div className="grid items-center gap-2">
            <p className="font-medium text-md leading-5 text-gray-200">
                Select Note Type:
            </p>

            <div className="flex flex-wrap gap-3 border border-gray-600 bg-primary border-dashed rounded-md py-4  px-2">
                {noteTypes.map((n) => (
                    <button
                        key={n.value}
                        onClick={() => handleNoteTypeSelect(n.value)}
                        className={cn(
                            "flex justify-center items-center rounded-full px-4 py-1 border border-indigo-500 bg-primary gap-2 text-gray-100",
                            {
                                "bg-emerald-700 border-none":
                                    filterState?.noteType === n.value,
                            }
                        )}
                    >
                        {n.icon}
                        <span className={"text-xs sm:text-sm"}>{n.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default NoteTypeFilter;
