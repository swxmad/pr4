import styles from './Header.module.css'

function Header() {
  return (
    <>
      <header>
        <div className={styles.head}>
          <div className={styles.hour}>3-Hour Delivery</div>
          <p>Elegant Bouquets, Locally Crafted in LA</p>
          <button>Browse Bouquets</button>
        </div>
      </header>
    </>
  )
}

export default Header
