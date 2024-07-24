import { X, PlusIcon } from "lucide-react";
import React from "react";
import { useState } from "react";

const tagsTextLimit = {
    min: 3,
    max: 24,
};
const maxTagsCount = 10;

function AddTags({ noteData, shouldDisable = false, setNoteData }) {
    const shouldDisableTagInput =
        noteData.tags.length >= maxTagsCount || shouldDisable;
    const [tag, setTag] = useState("");

    const handleAddTag = () => {
        if (tag.length < tagsTextLimit.min) {
            return;
        }
        setNoteData((old) => {
            if (old.tags.length < maxTagsCount) {
                const newTags = new Set(old.tags);
                newTags.add(tag);
                setTag("");
                return { ...old, tags: Array.from(newTags) };
            }
            return old;
        });
    };

    const handleRemoveTag = (tagText) => {
        setNoteData((old) => {
            return { ...old, tags: old.tags.filter((v) => v !== tagText) };
        });
    };

    const renderTags = () => {
        const tagList = noteData.tags;
        return (
            <div className="flex flex-wrap gap-2">
                {tagList.map((v, i) => {
                    return (
                        <div
                            key={i + v + i}
                            className="badge badge-neutral gap-1 h-auto"
                        >
                            {v}
                            <button
                                className="text-gray-400 hover:text-rose-500"
                                onClick={() => handleRemoveTag(v)}
                            >
                                <X className="w-5 " />
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg ">
            <label htmlFor="tags">Add Tags</label>
            <div className="w-full flex  gap-2 relative">
                <input
                    type="text"
                    name="note-tags"
                    id="tags"
                    value={tag}
                    placeholder={`Enter Tags`}
                    maxLength={tagsTextLimit.max}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddTag();
                        }
                    }}
                    onChange={(e) => setTag(e.currentTarget.value)}
                    className={`input-field  border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md py-2 w-full  text-zinc-300 ${shouldDisableTagInput ? "hidden" : "visible"}`}
                />
                <div
                    className={`absolute text-xs right-36 translate-y-1/2 bg-green-900 rounded-md px-2 py-1 ${shouldDisableTagInput ? "hidden" : ""}`}
                >
                    {tag.length}/{tagsTextLimit.max}
                </div>
                <button
                    className={`btn bg-slate-800 hover:bg-slate-600 ${shouldDisableTagInput ? "hidden" : ""}`}
                    onClick={() => {
                        handleAddTag();
                    }}
                >
                    <PlusIcon /> Add Tag
                </button>
            </div>
            {noteData.tags.length >= maxTagsCount ? (
                <p className="text-rose-200 bg-rose-900 p-2 rounded-lg">
                    You can't add more then {maxTagsCount} Tags. Please delete
                    one to add.
                </p>
            ) : null}
            {renderTags()}
        </div>
    );
}

export default AddTags;
