import React from "react";
import { cn } from "../../exports";
function NoteTitleFilter({ filterState, isMobile, setFilterState }) {
    const titleConditionType = [
        {
            label: "Contains",
            value: "contains",
        },
        {
            label: "Not Contains",
            value: "not-contains",
        },
        {
            label: "Is",
            value: "is",
        },
    ];
    const handleNoteTitleFilterType = (t) => {
        if (filterState.titleCondition === t) {
            t = "";
        }
        setFilterState((old) => ({
            ...old,
            titleCondition: t,
        }));
    };
    return (
        <div className="grid items-center gap-2">
            <p className="font-medium text-md leading-5 text-gray-200">
                Note Title Filter
            </p>
            {/* <hr /> */}
            <div className="flex flex-col gap-3 border border-gray-600 bg-primary border-dashed rounded-md py-4 px-3">
                <div className="flex flex-wrap gap-4 mt-2">
                    {titleConditionType.map((n) => (
                        <button
                            key={n.value}
                            onClick={() => handleNoteTitleFilterType(n.value)}
                            className={cn(
                                "flex justify-center items-center rounded-full px-4 py-1 border border-indigo-500 bg-primary gap-2 text-gray-100",
                                {
                                    "bg-emerald-700 border-none":
                                        filterState?.titleCondition === n.value,
                                }
                            )}
                        >
                            <span className={"text-xs sm:text-sm"}>
                                {n.label}
                            </span>
                        </button>
                    ))}
                </div>
                <label className="flex flex-col">
                    <span className="text-gray-300 text-sm">
                        Enter Note Title
                    </span>
                    <input
                        placeholder="Enter note title"
                        className="p-2 mt-2 px-4 text-sm text-gray-300 rounded-md  focus:outline-none ring-1 ring-gray-500 bg-slate-800 focus:ring-green-400"
                        value={filterState.titleQuery}
                        onChange={(e) =>
                            setFilterState((o) => ({
                                ...o,
                                titleQuery: e.target.value,
                            }))
                        }
                    />
                </label>
            </div>
        </div>
    );
}

export default NoteTitleFilter;
