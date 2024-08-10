import { X, PlusIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import {
    MAX_TAGS_COUNT_LIMIT,
    TAGS_TEXT_CHAR_LIMIT,
} from "../../utils/Contents.jsx";
import { cn } from "../../exports.jsx";
import { XCircle } from "lucide-react";

const tagsTextLimit = TAGS_TEXT_CHAR_LIMIT;
function AddTags({ noteData, shouldDisable = false, setNoteData }) {
    const maxTagsCount = MAX_TAGS_COUNT_LIMIT;

    const shouldDisableTagInput =
        noteData.tags.length >= maxTagsCount || shouldDisable;

    const [tag, setTag] = useState("");

    const handleAddTag = () => {
        if (tag.length < tagsTextLimit.MIN) {
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
                            className="badge badge-neutral badge-sm sm:badge-lg gap-1 h-auto"
                        >
                            {v}
                            <button
                                className={cn(
                                    "text-gray-400 hover:text-rose-500",
                                    {
                                        hidden: i == 0,
                                    }
                                )}
                                onClick={() => handleRemoveTag(v)}
                            >
                                <XCircle className="size-3.5 sm:size-5 text-red-800 sm:text-inherit" />
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-2 bg-primary p-2 rounded-lg ">
            <div className="space-x-2">
                <label htmlFor="tags" className="text-sm sm:text-sm">
                    Add Tags
                </label>
                <span className="badge badge-info badge-sm sm:badge-md  font-bold">
                    {noteData?.tags?.length ?? 0}
                </span>
            </div>
            <div className="w-full flex  gap-2 relative">
                <input
                    type="text"
                    name="note-tags"
                    id="tags"
                    value={tag}
                    placeholder={`Enter Tags`}
                    maxLength={tagsTextLimit.MAX}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAddTag();
                        }
                    }}
                    onChange={(e) => setTag(e.currentTarget.value)}
                    className={`input-field h-fit py-2 text-xs sm:text-base border-none ring-1 ring-slate-600 focus:ring-1 focus:ring-green-700 rounded-md sm:py-2 w-full  text-zinc-300 ${shouldDisableTagInput ? "hidden" : "visible"}`}
                />
                <div
                    className={`absolute text-xxs sm:text-xs right-[56px] sm:right-32 top-1.5 sm:top-2 bg-green-900 rounded-md px-2 py-1 ${shouldDisableTagInput ? "hidden" : ""}`}
                >
                    {tag.length}/{tagsTextLimit.MAX}
                </div>
                <button
                    className={`btn btn-sm sm:btn-md bg-slate-800 hover:bg-slate-600 ${shouldDisableTagInput ? "hidden" : ""}`}
                    onClick={() => {
                        handleAddTag();
                    }}
                >
                    <PlusIcon className="size-4 sm:size-5" />
                    <span className="sm:block hidden">Add Tag</span>
                </button>
            </div>
            {noteData.tags.length >= maxTagsCount ? (
                <p className="text-rose-200 text-xs sm:text-base bg-rose-900 p-2 rounded-lg">
                    You can't add more then {maxTagsCount} Tags. Please delete
                    one to add.
                </p>
            ) : null}
            {renderTags()}
        </div>
    );
}

export default AddTags;
