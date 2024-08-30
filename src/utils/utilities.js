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
export const randomBadgeClassName = () => {
    const classList = [
        "badge-info",
        "badge-primary",
        "badge-secondary",
        "badge-success",
        "badge-accent",
        "badge-warning",
    ];
    const randomIndex = Math.floor(Math.random() * classList.length);
    return classList[randomIndex];
};
export const buildFilterUrl = (filterState, basePath = "/dashboard") => {
    // Remove any undefined or null values from the filterState
    const cleanFilterState = Object.entries(filterState).reduce(
        (acc, [key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                acc[key] = value;
            }
            return acc;
        },
        {}
    );

    // Convert the filter state to a query string
    const queryParams = Object.entries(cleanFilterState)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                // Handle arrays
                return value
                    .map(
                        (v) =>
                            `${encodeURIComponent(key)}[]=${encodeURIComponent(v)}`
                    )
                    .join("&");
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join("&");

    // Construct the full URL
    return `${basePath}${queryParams ? `?${queryParams}` : ""}`;
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
