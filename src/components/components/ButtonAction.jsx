import { useContext } from 'react';
import '../../styles/styles-components/ButtonAction.css'
import AppContext from "../../context/AppContext";


function ButtonAction({ className, elementName, classTheme, colorPointer }) {
    const { setColorGradient } = useContext(AppContext)

    const setTheme = () => {
        document.documentElement.className = classTheme;
        setColorGradient(colorPointer)
    }

    return(
        <div className={ className }  onClick={ setTheme } >{ elementName }</div>
    )
}

export default ButtonAction