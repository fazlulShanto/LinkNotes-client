import { PackageOpen } from "lucide-react";
import { PlusIcon } from "lucide-react";
import { NotebookIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import CreateNotesModal from "./CreateNoteModal";
import { cn } from "../exports";

function EmptyNotes({ isFilterResult }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="h-full w-full flex flex-col justify-center gap-3 rounded-lg  p-4">
            <div className="w-full flex justify-center items-center flex-col gap-4">
                <PackageOpen className="text-sky-800" size={100} />
                <div className="text-center flex flex-col gap-1">
                    <p className="text-white font-semibold text-md">
                        No Notes found.
                    </p>
                    {isFilterResult ? null : (
                        <p className="font-medium text-sm leading-6">
                            Get started by creating a new note.
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className={cn(
                        "btn bg-sky-600 hover:bg-sky-600 text-white",
                        {
                            hidden: isFilterResult,
                        }
                    )}
                >
                    <PlusIcon />
                    <span className="text-md font-semibold">Create a note</span>
                </button>
            </div>
            {isModalOpen ? (
                <CreateNotesModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    modalHeader={"Create a new note"}
                    actionType="CREATE"
                />
            ) : null}
        </div>
    );
}

export default EmptyNotes;
