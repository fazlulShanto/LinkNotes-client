import React from "react";
import useBodyScroll from "../hooks/useBodyScroll";
import { randomBadgeClassName } from "../utils/utilities";

function NoteTags({ notesData }) {
    const { disableScroll, enableScroll } = useBodyScroll();
    const noteType = notesData.type;
    const tags = notesData?.tags ?? [];
    const renderNoteTags = () => {
        return (
            <div className="flex space-x-2 pb-2">
                <div
                    key={"default"}
                    className={`badge badge-primary bg-inherit border-violet-600 bg-violet-900 text-white whitespace-nowrap`}
                >
                    {noteType}
                </div>
                {tags.map((v, index) => {
                    let randomBadgeClass = randomBadgeClassName();
                    if (v === noteType) {
                        return null;
                    }
                    return (
                        <div
                            key={v + index}
                            className={`badge font-medium ${randomBadgeClass} text-black whitespace-nowrap`}
                        >
                            {v}
                        </div>
                    );
                })}
            </div>
        );
    };
    return (
        <div
            onMouseEnter={disableScroll}
            onMouseLeave={enableScroll}
            className="flex flex-wrap flex-row"
        >
            <div
                onWheel={(evt) => {
                    evt.currentTarget.scrollLeft += evt.deltaY;
                }}
                className="hide-scrollbar overflow-x-auto hover:cursor-move"
            >
                {renderNoteTags()}
            </div>
        </div>
    );
}

export default NoteTags;
