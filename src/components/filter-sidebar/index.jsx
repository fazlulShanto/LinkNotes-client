import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../Sheet.jsx";

import {
    useAppContext,
    useNavigate,
    toast,
    cn,
    toaster,
} from "../../exports.jsx";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import NoteTypeFilter from "./NoteTypeFilter.jsx";
import NoteTitleFilter from "./NoteTitleFilter.jsx";
import NoteTagFilter from "./NoteTagFilter.jsx";
import { buildFilterUrl } from "../../utils/utilities.js";

function FilterSidebar({ isMobile }) {
    const navigate = useNavigate();

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
            <button className="">
                <FilterIcon className="" size={28} />
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
        console.log(filterState);
        const url = buildFilterUrl(filterState, "/dashboard");
        navigate(url, { state: { fromFilter: true } });
        setIsOpen(false);
        console.log(`url=`, url);
    };

    const renderFilterSheet = () => {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen} className="">
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
                        <button
                            onClick={handleFilter}
                            className="btn bg-primary hover:bg-emerald-800  w-full sm:text-lg leading-5 font-semibold text-gray-300"
                        >
                            Filter Notes
                        </button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        );
    };

    return renderFilterSheet();
}

export default FilterSidebar;
