import { ApiEndpoints, Axios } from "../exports";

export const getUserAllNotes = async () => {
    const { data } = await Axios.get(ApiEndpoints.getAllNotes());
    return data;
};

export const createNewNote = async (noteData) => {
    if (!noteData) {
        throw new Error(`noteData is missing!`);
    }
    const { data } = await Axios.post(ApiEndpoints.createANewNotes(), noteData);
    return data;
};

export const deleteSingleNote = async (noteId) => {
    if (!noteId) {
        throw new Error(`noteData is missing!`);
    }
    const { data } = await Axios.delete(ApiEndpoints.deleteNotes(), {
        data: JSON.stringify({
            noteIds: [noteId],
        }),
    });
    return data;
};

export const getUserPinnedNotes = async () => {
    const { data } = await Axios.get(ApiEndpoints.pinnedNotes());
    return data;
};

export const toggleNotePin = async (noteId, pinStatus) => {
    const { data } = await Axios.patch(
        ApiEndpoints.toggleNotePin(noteId, pinStatus)
    );
    return data;
};

export const toggleSingleCheckItem = async (noteId, itemId, isChecked) => {
    const { data } = await Axios.patch(
        ApiEndpoints.toggleCheckItem(noteId, itemId, isChecked)
    );
    return data;
};
