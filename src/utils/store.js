import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ApiEndpoints, Axios } from "../exports";
import {
    createNewNote,
    deleteSingleNote,
    toggleSingleCheckItem,
} from "../services/notesService";
import { immer } from "zustand/middleware/immer";

const store = create(
    devtools(
        immer((set) => ({
            noteList: [],
            isLoading: false,
            pins: [],
            async fetchUserNoteList() {
                set({ isLoading: true });
                try {
                    const { data } = await Axios.get(
                        ApiEndpoints.getAllNotes()
                    );
                    set({ noteList: data.dataSource?.notes });
                } catch (error) {
                } finally {
                    set({ isLoading: false });
                }
            },

            async removeANote(noteId = "") {
                try {
                    const data = await deleteSingleNote(noteId);
                    set((old) => {
                        old.noteList = old.noteList.filter(
                            (n) => n._id !== noteId
                        );
                    });
                    return data.dataSource?.result?.message;
                } catch (error) {}
            },
            async updateCheckboxItemStatus(noteData, checkItemId, isChecked) {
                try {
                    await toggleSingleCheckItem(
                        noteData._id,
                        checkItemId,
                        isChecked
                    );
                    set((old) => {
                        old.noteList.forEach((n) => {
                            if (n._id === noteData._id) {
                                const p = n.noteContent.value.find(
                                    (v) => v.id === checkItemId
                                );
                                p.isChecked = !isChecked;
                            }
                        });
                    });
                } catch (error) {}
            },

            async updateSingleNote(noteData = {}) {
                // put -> note
                try {
                    const { data } = await Axios.put(
                        ApiEndpoints.updateNote(noteData._id),
                        {
                            data: noteData,
                        }
                    );
                    set((old) => {
                        old.noteList.forEach((n, idx) => {
                            if (n._id === noteData._id) {
                                old.noteList[idx] = data.dataSource.result;
                            }
                        });
                    });
                } catch (error) {}
            },

            async addNewNote(noteData = {}) {
                set({ isLoading: true });
                try {
                    const data = await createNewNote(noteData);
                    const newNote = data.dataSource?.data;
                    set((old) => ({ noteList: [...old.noteList, newNote] }));
                } catch (error) {
                } finally {
                    set({ isLoading: false });
                }
            },
        })),
        {
            name: "link-notes",
        }
    )
);

const createSelectors = (_store) => {
    let store = _store;
    store.use = {};
    for (let k of Object.keys(store.getState())) {
        store.use[k] = () => store((s) => s[k]);
    }

    return store;
};

const useStore = createSelectors(store);
export default useStore;
