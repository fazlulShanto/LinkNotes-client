import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../exports";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(
    ({ className, sideOffset = 4, ...props }, ref) => (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 overflow-hidden bg-black rounded-md border border-slate-100 px-3 py-1.5 text-sm text-slate-700 shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",
                    className
                )}
                {...props}
            />
        </TooltipPrimitive.Portal>
    )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const CustomTooltip = ({ children }) => {
    return (
        <TooltipProvider>
            <Tooltip>{children}</Tooltip>
        </TooltipProvider>
    );
};

export {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
    CustomTooltip,
};
