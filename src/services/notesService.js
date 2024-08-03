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
