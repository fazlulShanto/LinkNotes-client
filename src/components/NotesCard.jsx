import { AlignLeftIcon } from "lucide-react";
import useBodyScroll from "../hooks/useBodyScroll";
import CheckBoxListNotes from "./noteCards/CheckBoxListNotes";
import TextNote from "./noteCards/TextNote";
import UrlNotes from "./noteCards/UrlNotes";
import React from "react";

import { EllipsisVerticalIcon } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";

export default function NotesCard({ notesData }) {
    const { disableScroll, enableScroll } = useBodyScroll();
    const noteType = notesData.type;
    const renderNoteUi = () => {
        switch (noteType) {
            case "text":
                return <TextNote notesData={notesData} />;
            case "url":
                return <UrlNotes notesData={notesData} />;
            case "checkList":
                return <CheckBoxListNotes notesData={notesData} />;
            default:
                return null;
        }
    };

    const renderNoteTags = () => {
        return (
            <div className="flex space-x-2 pb-2">
                <div className="badge badge-info font-medium pt-0.5 whitespace-nowrap">
                    Text
                </div>
                <div className="badge whitespace-nowrap">default</div>
                <div className="badge badge-primary whitespace-nowrap">
                    primary
                </div>
                <div className="badge badge-success text-white whitespace-nowrap">
                    secondary
                </div>
                <div className="badge badge-secondary whitespace-nowrap">
                    +99
                </div>
                <div className="badge badge-accent whitespace-nowrap">
                    accent
                </div>
                <div className="badge badge-warning whitespace-nowrap">
                    warn
                </div>
                <div className="badge badge-secondary whitespace-nowrap">
                    +99
                </div>
                <div className="badge badge-accent whitespace-nowrap">
                    accent
                </div>
                <div className="badge badge-warning whitespace-nowrap">
                    warn
                </div>
            </div>
        );
    };

    const renderPopOverContent = () => {
        return (
            <Popover>
                <PopoverTrigger>
                    <EllipsisVerticalIcon className="sm:h-6 sm:w-6" />
                </PopoverTrigger>
                <PopoverContent
                    className="bg-slate-600 border-gray-500 w-fit flex flex-col text-zinc-300 gap-2 items-start px-3 py-1"
                    side="right"
                >
                    <button className="hover:text-accent text-left w-full">
                        Pin
                    </button>
                    <button className="hover:text-accent text-left w-full">
                        Edit
                    </button>
                    <button className="hover:text-accent text-left w-full">
                        Delete
                    </button>
                </PopoverContent>
            </Popover>
        );
    };
    return (
        <div className="card h-56 overflow-y-auto bg-[#263149] text-gray-300 min-w-[250px] flex relative w-full shadow-xl">
            <div className="absolute right-2 top-4">
                {renderPopOverContent()}
            </div>
            <div className="card-body p-4">
                <h2 className="card-title">{notesData.noteTitle}</h2>
                {renderNoteUi()}
                <div
                    onMouseEnter={disableScroll}
                    onMouseLeave={enableScroll}
                    className="flex flex-wrap flex-row"
                >
                    <div
                        onWheel={(evt) => {
                            evt.currentTarget.scrollLeft += evt.deltaY;
                            evt.preventDefault();
                        }}
                        className="hide-scrollbar overflow-x-auto hover:cursor-move"
                    >
                        {renderNoteTags()}
                    </div>
                </div>
            </div>
        </div>
    );
}
