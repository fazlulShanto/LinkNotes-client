import { XCircle } from "lucide-react";
import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import ViewNotesModal from "./ViewNotesModal";
import { X } from "lucide-react";
import { XCircleIcon } from "lucide-react";
import { Plus } from "lucide-react";
import { PlusIcon } from "lucide-react";
import AddTags from "./notesInput/AddTags";
import NoteTitle from "./notesInput/NoteTitle";
import NoteTypeSelect from "./notesInput/NoteTypeSelect";
import NoteDescription from "./notesInput/NoteDescription";
import CreateTextNote from "./notesInput/CreateTextNote";
import CreateUrlNote from "./notesInput/CreateUrlNote";
const buttonText = {
    CREATE: "Create Note",
    EDIT: "Save changes",
    VIEW: null,
};
const defaultNoteData = {
    type: "text",
    title: "",
    description: "",
    url: "",
    shortDescription: "",
    checkList: "",
    tags: [],
};
function NotesModal({
    isModalOpen,
    modalHeader,
    children,
    onClose,
    onPrimaryAction,
    actionType = "CREATE",
    data = defaultNoteData,
}) {
    const shouldDisable = actionType === "VIEW";
    const isModalActionView = actionType === "VIEW";
    const [noteData, setNoteData] = useState(
        isModalActionView ? data : defaultNoteData
    );

    const handleNotedataChanges = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name.split("-").pop();
        setNoteData((old) => ({
            ...old,
            [name]: value,
        }));
    };

    const renderNoteCreationModalContent = () => {
        switch (noteData.type) {
            case "text": {
                return (
                    <CreateTextNote
                        noteData={noteData}
                        setNoteData={setNoteData}
                        shouldDisable={shouldDisable}
                        handleNotedataChanges={handleNotedataChanges}
                    />
                );
            }
            case "url": {
                return (
                    <CreateUrlNote
                        noteData={noteData}
                        setNoteData={setNoteData}
                        shouldDisable={shouldDisable}
                        handleNotedataChanges={handleNotedataChanges}
                    />
                );
            }
            default:
                return null;
        }
    };

    if (isModalActionView) {
        return <ViewNotesModal />;
    }

    return (
        <Modal
            center={true}
            open={isModalOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            showCloseIcon={false}
            classNames={{
                modal: "p-6 rounded-lg max-w-lg w-[90vw] sm:max-w-[800px] bg-slate-800 text-secondary",
            }}
            closeIcon={<XCircle size={24} />}
        >
            <div className="flex flex-col gap-3">
                <div id="modal-header">
                    <h1 className="text-secondary font-medium text-xl">
                        {modalHeader}
                    </h1>
                </div>

                <div id="modal-content">{renderNoteCreationModalContent()}</div>

                <div id="modal-footer" className="flex flex-col gap-2">
                    <hr className="border-t border-gray-500" />
                    <div className="flex flex-row-reverse w-full gap-4">
                        {buttonText[actionType] ? (
                            <button
                                className="px-4 rounded-lg btn-success text-zinc-100 bg-emerald-700 disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed"
                                onClick={onPrimaryAction}
                                disabled={true}
                            >
                                {buttonText[actionType]}
                            </button>
                        ) : null}
                        <button className="btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default NotesModal;
