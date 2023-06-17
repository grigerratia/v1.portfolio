import { useState } from "react";
import PointerContext from "./PointerContext";

function StatePointerContext({ children }) {
    const [colorGradient, setColorGradient] = useState('#1d4ed826')

    return (
        <PointerContext.Provider
            value={{
                colorGradient,
                setColorGradient
            }}
        >
            { children }
        </PointerContext.Provider>
    )
}

export default StatePointerContext