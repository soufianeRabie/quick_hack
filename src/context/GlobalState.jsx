import {createContext, useContext, useReducer} from "react";
import AppReducer, {initialState} from "@/context/Features/AppReducer.js";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{  dispatch, state }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
