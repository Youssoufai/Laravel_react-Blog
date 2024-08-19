import { createContext } from "react";

export const AppContext = createContext()

export default function AppProvider({ children }) {
    return (
        <AppContext.Provider value={{ name: "Jon" }}>
            {children}
        </AppContext.Provider>
    )
}