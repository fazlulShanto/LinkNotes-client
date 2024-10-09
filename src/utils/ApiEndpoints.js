import { baseUrl } from "../exports";

const ApiEndpoints = {
    singIn: () => `${baseUrl}/api/user/log-in`,
    singUp: () => `${baseUrl}/api/user/sign-up`,
    signOut: () => `${baseUrl}/api/user/log-out`,
    dummyData: () => `${baseUrl}/api/dummy-data`,
    apiHealth: () => `${baseUrl}/api/health-check`,
    me: () => `${baseUrl}/api/user/me`,
    notes: () => `${baseUrl}/api/notes`,
    getAllNotes: () => `${baseUrl}/api/notes`,
    createANewNotes: () => `${baseUrl}/api/notes`,
    deleteNotes: () => `${baseUrl}/api/notes`,
    pinnedNotes: () => `${baseUrl}/api/notes/pinned-notes`,
    updateNote: (noteId) => `${baseUrl}/api/notes/${noteId}`,
    filterNote: (queryParams) => `${baseUrl}/api/notes/filter/${queryParams}`,
    toggleNotePin: (noteId, isPinned) =>
        `${baseUrl}/api/notes/toggle-pin?noteId=${noteId}&isPinned=${isPinned}`,
    toggleCheckItem: (noteId, itemId, isChecked) =>
        `${baseUrl}/api/notes/toggle-checkbox-item?noteId=${noteId}&itemId=${itemId}&isChecked=${isChecked}`,
};

export default ApiEndpoints;
