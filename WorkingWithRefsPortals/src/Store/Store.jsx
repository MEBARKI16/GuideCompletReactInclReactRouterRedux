import { createContext, useState } from "react";

export const Store = createContext(null);

const GlobalContext = ({ children }) => {
    const [name, setName] = useState("unknown entity");
    const infos = {
        name,
        setName
    }
    return (
        <Store.Provider value={infos}>
            {children}
        </Store.Provider>
    )
}
export default GlobalContext;