import Card from '../layouts/Card'
import Pointer from '../components/Pointer'
import VerticalLink from '../components/VerticalLink'
import StatePointerContext from '../../context/StatePointerContext'

function App() {

    return(
        <>
            <StatePointerContext>
                <Card className="card"/>
                <Pointer />
            </StatePointerContext>
            <VerticalLink />
        </>
    )
}

export default App