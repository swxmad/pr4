import styles from './HomePage.module.css'
import Header from "./components/Header/Header"
import New from './components/New/New'
import Choice from './components/Choice/Choice'
import Offer from './components/Offer/Offer'
import Sale from './components/Sale/Sale'
import Rviews from './components/Rviews/Rviews'
import Footer from './components/Footer/Footer'

function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <New />
        <Choice />
      </div>
      <Offer />
      <div className={styles.container}>
        <Sale />
        <Rviews />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
