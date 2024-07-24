import { useMemo } from "react";
import { useContext } from "react";
import { useReducer, createContext } from "react";

const initialState = {
    theme: "dark",
    userInfo: {
        email: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
        userId: "",
        avatarUrl: "",
    },
};

export const stateActions = {
    updateTheme: "updateTheme",
    updateUserInfo: "UPDATE_USER_INFO",
};

const contextReducer = (state = initialState, payload) => {
    const action = payload?.action;
    const data = payload?.data;
    switch (action) {
        case stateActions.updateUserInfo: {
            return {
                ...state,
                userInfo: data,
            };
        }

        default:
            return state;
    }
};

const AppContext = createContext({
    state: initialState,
    dispatch: { action: "", data: "" },
});

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);
    // console.log(`🛑 rending Provider`);
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
