import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../Sheet.jsx";

import { useNavigate, cn, toaster } from "../../exports.jsx";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import NoteTypeFilter from "./NoteTypeFilter.jsx";
import NoteTitleFilter from "./NoteTitleFilter.jsx";
import NoteTagFilter from "./NoteTagFilter.jsx";
import { buildFilterUrl } from "../../utils/utilities.js";
import { useLocation } from "react-router-dom";

function FilterSidebar({ isMobile }) {
    const navigate = useNavigate();
    const location = useLocation();

    const side = isMobile ? "bottom" : "right";

    const [isOpen, setIsOpen] = useState(false);

    const [filterState, setFilterState] = useState({
        noteType: "",
        titleCondition: "",
        titleQuery: "",
        tagCondition: "",
        tagQuery: "",
    });

    const renderTriggerButton = () => {
        if (!isMobile) {
            return (
                <button className="btn  hover:bg-sky-600 text-gray-200 bg-slate-700">
                    <FilterIcon />
                    <span>Filter notes</span>
                </button>
            );
        }
        return (
            <button>
                <FilterIcon className="text-sky-400" size={24} />
            </button>
        );
    };

    const handleFilter = () => {
        const hasEmptyValue = Object.values(filterState).every(
            (e) => !e.trim().length
        );
        if (hasEmptyValue) {
            toaster.error(`Empty filter conditions!`, { duration: 1.5 * 1000 });
            return;
        }
        const url = buildFilterUrl(filterState, location.pathname);
        navigate(url, { state: { fromFilter: true } });
        setIsOpen(false);
    };

    const handleClearFilter = () => {
        setFilterState({
            noteType: "",
            titleCondition: "",
            titleQuery: "",
            tagCondition: "",
            tagQuery: "",
        });
    };

    const renderFilterSheet = () => {
        return (
            <Sheet open={isOpen} modal={true} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="cursor-pointer">
                    {renderTriggerButton()}
                </SheetTrigger>

                <SheetContent
                    onInteractOutside={(e) => e.preventDefault()}
                    side={side}
                    className={cn(
                        "bg-slate-800 border-none w-full max-h-screen sm:min-w-[600px] overflow-y-scroll ",
                        {
                            "mb-0": isMobile,
                        }
                    )}
                >
                    <SheetHeader className={"flex text-start"}>
                        <SheetTitle className="flex  gap-2 items-center sm:text-2xl text-gray-200">
                            <FilterIcon />
                            Filter Notes
                        </SheetTitle>
                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-6 py-4">
                        <NoteTypeFilter
                            isMobile={isMobile}
                            setFilterState={setFilterState}
                            filterState={filterState}
                        />
                        <NoteTitleFilter
                            isMobile={isMobile}
                            setFilterState={setFilterState}
                            filterState={filterState}
                        />
                        <NoteTagFilter
                            isMobile={isMobile}
                            setFilterState={setFilterState}
                            filterState={filterState}
                        />
                    </div>
                    <SheetFooter>
                        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <button
                                onClick={handleFilter}
                                className="btn bg-primary hover:bg-emerald-800 border-none  w-full sm:w-1/2 sm:text-lg leading-5 font-semibold text-gray-300"
                            >
                                Filter Notes
                            </button>
                            <button
                                onClick={handleClearFilter}
                                className="btn bg-rose-700 hover:bg-rose-800 border-none  w-full sm:w-1/2 sm:text-lg leading-5 font-semibold text-white"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        );
    };

    return renderFilterSheet();
}

export default FilterSidebar;
