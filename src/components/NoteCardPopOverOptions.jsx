import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { EllipsisVerticalIcon } from "lucide-react";
import { deleteSingleNote } from "../services/notesService";
import { useState } from "react";
import { toast } from "../exports";
import { Trash2 } from "lucide-react";
import { Pin } from "lucide-react";
import { SquarePen } from "lucide-react";
import ViewNotesModal from "./ViewNotesModal";

function NoteCardPopOverOptions({ noteData }) {
    const [open, setOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const handleNoteDelete = () => {
        deleteSingleNote(noteData._id)
            .then((res) => {
                console.log(res);
                toast.success(res.dataSource.result.message);
                setOpen(false);
            })
            .catch((er) => {
                toast.error(`Couldn't delete the note.`);
            });
    };
    return (
        <div className="flex gap-2">
            <button
                onClick={() => setIsViewModalOpen(true)}
                className="btn btn-ghost btn-xs sm:btn-sm btn-info btn-outline "
            >
                View
            </button>
            <button className="btn btn-xs sm:btn-sm btn-ghost btn-square btn-outline btn-accent">
                <Pin className="size-4 rotate-45" />
            </button>
            <Popover open={open}>
                <PopoverTrigger onClick={() => setOpen(!open)}>
                    <EllipsisVerticalIcon className="size-5" />
                </PopoverTrigger>
                <PopoverContent
                    className="bg-[#263149] border-gray-500 w-fit flex flex-col text-zinc-300 gap-2 items-start px-3 py-1"
                    side="right"
                    onInteractOutside={() => {
                        setOpen(false);
                    }}
                >
                    <button className="hover:text-accent text-left w-full">
                        Edit
                    </button>
                    <button
                        onClick={handleNoteDelete}
                        className="hover:text-accent text-left w-full"
                    >
                        Delete
                    </button>
                </PopoverContent>
            </Popover>
            <ViewNotesModal
                isModalOpen={isViewModalOpen}
                onClose={() => setIsViewModalOpen(false)}
                noteData={noteData}
            />
        </div>
    );
}

export default NoteCardPopOverOptions;
