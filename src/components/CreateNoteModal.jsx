import { XCircle } from "lucide-react";
import React from "react";
import { useState } from "react";
import Modal from "react-responsive-modal";
import ViewNotesModal from "./ViewNotesModal";
import AddTags from "./notesInput/AddTags";
import NoteTypeSelect from "./notesInput/NoteTypeSelect";
import CreateTextNote from "./notesInput/CreateTextNote";
import CreateUrlNote from "./notesInput/CreateUrlNote";
import CreateCheckListNote from "./notesInput/CreateCheckListNote";
import InputBoxWithLimit from "./InputBoxWithLimit";
import { validateNoteInput } from "../utils/utilities";
import { toast } from "../exports";
import useStore from "../utils/store";
import { useEffect } from "react";

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
    checkList: [],
    tags: ["text"],
};
function CreateNotesModal({
    isModalOpen,
    modalHeader,
    children,
    onClose,
    actionType = "CREATE",
    data = defaultNoteData,
}) {
    const shouldDisable = actionType === "VIEW";
    const isModalActionView = actionType === "VIEW";
    const isModalActionEdit = actionType === "EDIT";
    const [noteData, setNoteData] = useState(
        isModalActionView || isModalActionEdit ? data : defaultNoteData
    );
    const addNewNote = useStore.use.addNewNote();
    const updateSingleNote = useStore.use.updateSingleNote();
    const handleNotedataChanges = (e) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name.split("-").pop();
        setNoteData((old) => ({
            ...old,
            [name]: value,
        }));
    };

    const onPrimaryAction = (noteData) => {
        const result = validateNoteInput(noteData);
        const actionFunc = isModalActionEdit ? updateSingleNote : addNewNote;
        if (isModalActionEdit) {
            result._id = data._id;
        }
        const toastMessage = isModalActionEdit
            ? `Note updated successfully.`
            : `New note successfully added.`;

        if (!result) {
            toast.error("Please fill all the note data!");
            return;
        }

        actionFunc(result)
            .then((res) => {
                onClose();
                setNoteData(defaultNoteData);
                toast.success(toastMessage);
            })
            .catch((er) => {
                console.log(er);
                toast.error(`Failed to create new note!.`);
            });
    };

    const renderNoteTypeSpecificContent = () => {
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
            case "checkList": {
                return (
                    <CreateCheckListNote
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

    useEffect(() => {
        if (isModalActionEdit) {
            const editData = {
                _id: data?._id,
                type: data.type || "text",
                title: data.noteTitle || "",
                description:
                    data.type === "text" ? data.noteContent?.value : "",
                url: data.type === "url" ? data.noteContent?.value : "",
                shortDescription: "",
                checkList: data.noteContent?.value || [],
                tags: data.tags || [data?.type.toLowerCase()],
            };
            setNoteData(editData);
        }
    }, [actionType]);

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
                modal: "p-3  sm:p-6 rounded-lg max-w-lg w-[90vw] sm:max-w-[800px] bg-[#212a45] text-secondary",
            }}
            closeIcon={<XCircle size={24} />}
        >
            <div className="flex flex-col gap-2 sm:gap-3">
                <div id="modal-header">
                    <h1 className="text-secondary font-medium text-xl">
                        {modalHeader}
                    </h1>
                </div>

                <div id="modal-content" className="flex flex-col gap-3">
                    <NoteTypeSelect
                        noteData={noteData}
                        setNoteData={setNoteData}
                        shouldDisable={shouldDisable}
                        handleNotedataChanges={handleNotedataChanges}
                    />

                    <div className="space-y-2 sm:space-y-3 bg-primary p-2 rounded-lg">
                        <label
                            htmlFor="note-title"
                            className="text-sm sm:text-base"
                        >
                            Note Title
                        </label>
                        <InputBoxWithLimit
                            id="note-title"
                            value={noteData.title}
                            limit={32}
                            handleOnChange={handleNotedataChanges}
                        />
                    </div>
                    {renderNoteTypeSpecificContent()}
                    <AddTags
                        noteData={noteData}
                        setNoteData={setNoteData}
                        shouldDisable={shouldDisable}
                    />
                </div>

                <div id="modal-footer" className="flex flex-col gap-2">
                    <hr className="border-t border-gray-500" />
                    <div className="flex flex-row-reverse w-full gap-4">
                        {buttonText[actionType] ? (
                            <button
                                className="px-4  rounded-lg btn-success text-zinc-100 bg-sky-700 disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed"
                                onClick={() => onPrimaryAction(noteData)}
                                disabled={shouldDisable}
                            >
                                {buttonText[actionType]}
                            </button>
                        ) : null}
                        <button
                            className="btn btn-sm sm:btn-md"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default CreateNotesModal;
