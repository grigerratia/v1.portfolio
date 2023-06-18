import Card from '../layouts/Card'
import Pointer from '../components/Pointer'
import VerticalLink from '../components/VerticalLink'
import StateAppContext from '../../context/StateAppContext'

function App() {

    return(
        <>
            <StateAppContext>
                <Card className="card"/>
                <Pointer />
            </StateAppContext>
            <VerticalLink />
        </>
    )
}

export default App