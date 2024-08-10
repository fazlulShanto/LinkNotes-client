import { useMemo } from "react";
import { memo } from "react";
import NoteTags from "../NoteTags";
import { TooltipContent, CustomTooltip, TooltipTrigger } from "../ToolTip";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import NoteCardPopOverOptions from "../NoteCardPopOverOptions";

function UrlNotes({ notesData }) {
    let url = notesData.noteContent.value ?? "";

    return (
        <div className="card p-2 rounded-md relative h-fit overflow-y-auto bg-[#263149] text-gray-300 min-w-[250px] flex w-full shadow-xl">
            <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                    <ExternalLink className="size-6 text-indigo-400" />
                    <h2 className="font-medium text-base">URL</h2>
                </div>
                <NoteCardPopOverOptions noteData={notesData} />
            </div>
            <div className="flex flex-col gap-2 justify-between">
                <CustomTooltip>
                    <TooltipTrigger asChild>
                        <Link
                            className="cursor-pointer text-wrap flex gap-2  items-center text-sm py-2 font-normal rounded-md hover:underline"
                            to={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {notesData?.noteTitle}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black max-w-[300px]">
                        <p>{url}</p>
                    </TooltipContent>
                </CustomTooltip>
                <NoteTags notesData={notesData} />
            </div>
        </div>
    );
}
export default memo(UrlNotes);
