import { ApiEndpoints, Axios } from "../exports";
import { LOCAL_STORAGE_TOKEN } from "../utils/Contents";

export const getUserAllNotes = async () => {
    const { data } = await Axios.get(ApiEndpoints.getAllNotes(), {
        headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) },
    });
    return data;
};

export const createNewNote = async (noteData) => {
    if (!noteData) {
        throw new Error(`noteData is missing!`);
    }
    const { data } = await Axios.post(
        ApiEndpoints.createANewNotes(),
        noteData,
        { headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) } }
    );
    return data;
};

export const deleteSingleNote = async (noteId) => {
    if (!noteId) {
        throw new Error(`noteData is missing!`);
    }
    const { data } = await Axios.delete(
        ApiEndpoints.deleteNotes(),
        {
            data: JSON.stringify({
                noteIds: [noteId],
            }),
        },
        { headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) } }
    );
    return data;
};

export const getUserPinnedNotes = async () => {
    const { data } = await Axios.get(ApiEndpoints.pinnedNotes(), {
        headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) },
    });
    return data;
};

export const toggleNotePin = async (noteId, pinStatus) => {
    const { data } = await Axios.patch(
        ApiEndpoints.toggleNotePin(noteId, pinStatus),
        undefined,
        { headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) } }
    );
    return data;
};

export const toggleSingleCheckItem = async (noteId, itemId, isChecked) => {
    const { data } = await Axios.patch(
        ApiEndpoints.toggleCheckItem(noteId, itemId, isChecked),
        undefined,
        { headers: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN) } }
    );
    return data;
};
