import { useEffect, useState, useContext } from "react";
import PointerContext from "../../context/PointerContext";
import '../../styles/styles-components/Pointer.css'


function Pointer(){
    const { colorGradient } = useContext(PointerContext)

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener('pointermove', handleMove)
    }, [position])

    const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY })
    }

    return (
        <div className="pointer"
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${colorGradient}, transparent 80%)`
            }}
        >
            <div className="center-pointer">{ null }</div>
        </div>
    )
}

export default Pointer