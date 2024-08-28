import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { EllipsisVerticalIcon } from "lucide-react";
import { deleteSingleNote, toggleNotePin } from "../services/notesService";
import { useState } from "react";
import { toast } from "../exports";
import { Trash2 } from "lucide-react";
import { Pin } from "lucide-react";
import { SquarePen } from "lucide-react";
import ViewNotesModal from "./ViewNotesModal";
import { PinOff } from "lucide-react";
import useStore from "../utils/store";
import CreateNotesModal from "./CreateNoteModal";

function NoteCardPopOverOptions({ noteData }) {
    const removeNote = useStore.use.removeANote();
    const [open, setOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(noteData?.isPinned ?? false);

    const handleNoteDelete = () => {
        removeNote(noteData._id)
            .then((res) => {
                toast.success(res);
                setOpen(false);
            })
            .catch((er) => {
                console.log(er);
                toast.error(`Couldn't delete the note.`);
            });
    };

    const handleTogglePin = () => {
        setIsPinned(!isPinned);
        toggleNotePin(noteData._id, !isPinned).catch((er) => {
            toast.error("Failed to toggle!");
            setIsPinned(!isPinned);
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
            <button
                onClick={handleTogglePin}
                className="btn btn-xs sm:btn-sm btn-ghost btn-square btn-outline btn-accent"
            >
                {isPinned ? (
                    <Pin className="size-4 rotate-45" fill="green" />
                ) : (
                    <PinOff className="size-4" />
                )}
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
                    <button
                        onClick={() => setIsEditModalOpen((o) => !o)}
                        className="hover:text-accent text-left w-full"
                    >
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
            {isViewModalOpen ? (
                <ViewNotesModal
                    isModalOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                    noteData={noteData}
                />
            ) : null}
            {isEditModalOpen ? (
                <CreateNotesModal
                    isModalOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    modalHeader={`Edit Note: ${noteData?.noteTitle}`}
                    actionType="EDIT"
                    data={noteData}
                />
            ) : null}
        </div>
    );
}

export default NoteCardPopOverOptions;
