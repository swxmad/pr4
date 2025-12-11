import styles from './Choice.module.css'

function Choice() {
  return (
    <>
      <p className={styles.zagolovok}>Client’s Choice</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/Image (4).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Skyline Bloom</p>
            <p className={styles.naz}><span style={{fontSize:'18px', opacity: '65%', textDecoration: 'line-through'}}>$112</span> $99</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (5).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Lily Grace</p>
            <p className={styles.naz}><span style={{ fontSize: '18px', opacity: '65%', textDecoration: 'line-through' }}>$82</span> $73</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (6).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Floral Flirt</p>
            <p className={styles.naz}>$99</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (7).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Color Crush</p>
            <p className={styles.naz}>$100</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Choice
