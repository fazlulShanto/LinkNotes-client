import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const validateTextNotes = (noteData) => {
    const { type, title, description, tags } = noteData;
    if (typeof description !== "string" || !description) {
        return null;
    }
    const payload = {
        noteTitle: title,
        noteContent: {
            value: description,
        },
        type: type,
        tags: tags,
    };
    return payload;
};

export const validateUrlNotes = (noteData) => {
    const { type, title, url, tags } = noteData;
    if (typeof url !== "string" || !url) {
        return null;
    }
    const payload = {
        noteTitle: title,
        type: type,
        noteContent: {
            value: url,
        },
        tags: tags,
    };
    return payload;
};

export const validatecheckListNotes = (noteData) => {
    const { type, title, checkList, tags } = noteData;
    if (!Array.isArray(checkList) || !checkList.length) {
        return null;
    }
    const payload = {
        noteTitle: title,
        type: type,
        noteContent: {
            value: checkList,
        },
        tags: tags,
    };
    return payload;
};

export const validateNoteInput = (noteData) => {
    if (!noteData) {
        return null;
    }
    const requiredFieldForAllNotes = ["type", "title", "tags"];

    const hasRequiredFields = requiredFieldForAllNotes.every(
        (field) => noteData[field] && noteData[field]?.length
    );

    if (!hasRequiredFields) {
        console.log("Required fields are not fulfilled!");
        return null;
    }

    const type = noteData?.type || "text";

    switch (type) {
        case "text": {
            return validateTextNotes(noteData);
        }
        case "url": {
            return validateUrlNotes(noteData);
        }
        case "checkList": {
            return validatecheckListNotes(noteData);
        }

        default:
            return null;
    }
};
/*
{
    "type": "checkList",
    "title": "",
    "description": "",
    "url": "",
    "shortDescription": "",
    "checkList": [],
    "tags": []
}
*/
