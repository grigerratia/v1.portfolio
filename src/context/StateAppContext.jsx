import { useState } from "react";
import AppContext from "./AppContext";

function StateAppContext({ children }) {
    const [colorGradient, setColorGradient] = useState('#1d4ed826')
    const [infoShowed, setInfoShowed] = useState({})

    return (
        <AppContext.Provider
            value={{
                colorGradient,
                setColorGradient,
                infoShowed,
                setInfoShowed
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default StateAppContext