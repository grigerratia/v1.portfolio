import '../../styles/styles-components/ButtonAction.css'

function ButtonAction({ className, elementName, classTheme }) {

    const setTheme = () => document.documentElement.className = classTheme;

    return(
        <div className={ className }  onClick={ setTheme } >{ elementName }</div>
    )
}

export default ButtonAction