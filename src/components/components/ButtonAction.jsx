import { useContext } from 'react';
import '../../styles/styles-components/ButtonAction.css'
import PointerContext from "../../context/PointerContext";


function ButtonAction({ className, elementName, classTheme, colorPointer }) {
    const { setColorGradient } = useContext(PointerContext)

    const setTheme = () => {
        document.documentElement.className = classTheme;
        setColorGradient(colorPointer)
    }

    return(
        <div className={ className }  onClick={ setTheme } >{ elementName }</div>
    )
}

export default ButtonAction