import { useEffect, useState } from "react";
import '../../styles/styles-components/Pointer.css'

function Pointer(){

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
                // background: `radial-gradient(600px at ${position.x}px ${position.y}px, #c8542d26, transparent 80%)`
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, #1d4ed826, transparent 80%)`
            }}
        >
            <div className="center-pointer">{ null }</div>
        </div>
    )
}

export default Pointer