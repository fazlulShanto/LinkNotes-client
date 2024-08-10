import React from "react";
import NoteCardPopOverOptions from "../NoteCardPopOverOptions";
import { NotepadText } from "lucide-react";
import NoteTags from "../NoteTags";

export default function TextNote({ notesData }) {
    const noteContent = notesData?.noteContent?.value;
    const noteTitle = notesData?.noteTitle ?? "";
    return (
        <div
            id={notesData._id}
            className="card p-2 rounded-md relative h-fit overflow-y-auto bg-[#263149] text-gray-300 min-w-[250px] flex gap-2 w-full shadow-xl"
        >
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <NotepadText className="size-6 text-indigo-400 " />
                    <h2 className="font-medium text-base">Text </h2>
                </div>
                <NoteCardPopOverOptions noteData={notesData} />
            </div>
            <p className="text-xl font-medium">{noteTitle}</p>
            <div className="text-base">{noteContent?.slice(0, 100)}</div>
            <NoteTags notesData={notesData} />
        </div>
    );
}
