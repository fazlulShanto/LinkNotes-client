import { XCircle } from "lucide-react";
import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { cn, randomBadgeClassName } from "../utils/utilities";
import { CopyIcon } from "lucide-react";
import { X } from "lucide-react";
import { toast } from "../exports";
import { toggleSingleCheckItem } from "../services/notesService";
const defaultNoteData = {
    _id: "66b63f7420df28050f158351",
    user: null,
    noteTitle: "Connect to wifi with nmcli",
    type: "text",
    noteContent: {
        value: "with nmcli we can connect to wifi networks",
    },
    tags: [],
    createdAt: "2024-08-09T16:10:28.191Z",
    updatedAt: "2024-08-09T16:10:28.191Z",
    __v: 0,
};

function ViewNotesModal({ isModalOpen, onClose, noteData = defaultNoteData }) {
    const noteType = noteData.type;
    const tags = noteData.tags;
    const handleCopyButtonClick = () => {
        const data = noteData.noteContent?.value ?? "";
        navigator.clipboard.writeText(data);
        toast.success("Copied!");
    };

    const handleUpdateCheckboxItemStatus = (checkItemId, isChecked) => {
        console.log(
            `✅ note_id=${noteData._id} itemId=${checkItemId} status= ${isChecked}`
        );
        toggleSingleCheckItem(noteData._id, checkItemId, isChecked);
    };

    const renderCheckbox = ({ isChecked, text, id }) => {
        return (
            <label key={id} className="flex items-center gap-2 ">
                <input
                    type="checkbox"
                    id={id}
                    className="checkbox checkbox-xs [--chkfg:white]  checkbox-success"
                    onClick={() =>
                        handleUpdateCheckboxItemStatus(id, isChecked)
                    }
                    defaultChecked={isChecked}
                />
                {text}
            </label>
        );
    };
    const renderNoteTypeSpecificContent = () => {
        switch (noteData.type) {
            case "text": {
                return (
                    <div className="flex flex-col gap-2">
                        <div className="whitespace-pre-line bg-primary p-2">
                            {noteData.noteContent.value}
                        </div>
                        <button
                            onClick={handleCopyButtonClick}
                            className="btn btn-outline  btn-info btn-sm w-fit hover:text-white"
                        >
                            <CopyIcon className="size-5" />
                            <span>Copy Text</span>
                        </button>
                    </div>
                );
            }
            case "url": {
                return (
                    <div className="flex flex-col gap-2">
                        <div className="w-full bg-primary p-2 break-words ">
                            <p className="whitespace-normal">
                                {noteData.noteContent.value}
                            </p>
                        </div>
                        <button
                            onClick={handleCopyButtonClick}
                            className="btn btn-outline  btn-info btn-sm w-fit hover:text-white"
                        >
                            <CopyIcon className="size-5" />
                            <span>Copy Url</span>
                        </button>
                    </div>
                );
            }
            case "checkList": {
                return (
                    <div className="flex flex-col gap-1.5">
                        {noteData.noteContent.value.map((data, idx) =>
                            renderCheckbox(data)
                        )}
                    </div>
                );
            }
            default:
                return null;
        }
    };

    const renderNoteTags = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <div
                    key={"default"}
                    className={`badge badge-primary bg-inherit border-violet-600 bg-violet-900 text-white whitespace-nowrap`}
                >
                    {noteType}
                </div>
                {tags.map((v, index) => {
                    let randomBadgeClass = randomBadgeClassName();
                    if (v === noteType) {
                        return null;
                    }
                    return (
                        <div
                            key={v + index}
                            className={`badge font-medium ${randomBadgeClass} text-black whitespace-nowrap`}
                        >
                            {v}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <Modal
            center={true}
            open={isModalOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            showCloseIcon={true}
            closeIcon={
                <X className="text-error border border-error rounded-md size-5" />
            }
            classNames={{
                modal: "p-3 sm:p-6 rounded-md sm:rounded-lg  max-h-[80vh] max-w-lg w-[90vw] sm:max-w-[800px] bg-slate-700 text-secondary",
            }}
        >
            <div className="flex flex-col gap-2 sm:gap-3">
                <div id="modal-header">
                    <h1 className="text-secondary font-medium text-lg">
                        {`View: ${noteData?.noteTitle}`}
                    </h1>
                </div>
                <div
                    id="modal-content"
                    className="flex-1 max-h-[65vh] rounded-md overflow-y-auto flex flex-col gap-3"
                >
                    {renderNoteTypeSpecificContent()}
                </div>

                <div id="modal-footer" className="flex flex-col gap-2 mt-2">
                    {renderNoteTags()}
                </div>
            </div>
        </Modal>
    );
}

export default ViewNotesModal;
