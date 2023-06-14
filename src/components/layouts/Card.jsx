import '../../styles/styles-layout/Card.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import BigLogo from '../components/BigLogo'

function Card() {

  return (
      <div className="card">
        <Header />
        <Main />
        <BigLogo />
        <Footer />
      </div>
  )
}

export default Card
