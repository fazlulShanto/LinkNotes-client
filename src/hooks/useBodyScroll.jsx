import React from "react";
export default function useBodyScroll() {
    const preventDefault = React.useCallback((ev) => {
        ev?.preventDefault?.();
    }, []);

    const enableScroll = React.useCallback(() => {
        document &&
            document.removeEventListener("wheel", preventDefault, false);
    }, [preventDefault]);
    const disableScroll = React.useCallback(() => {
        document &&
            document.addEventListener("wheel", preventDefault, {
                passive: false,
            });
    }, [preventDefault]);

    React.useEffect(() => {
        return enableScroll;
    }, [enableScroll]);

    return { disableScroll, enableScroll };
}
