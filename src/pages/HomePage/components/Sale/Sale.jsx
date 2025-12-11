import styles from './Sale.module.css'

function Sale() {
  return (
    <>
      <p className={styles.zagolovok}>On Sale</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/images/Image.png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>White Whisper</p>
            <p className={styles.naz}><span style={{ fontSize: '18px', opacity: '65%', textDecoration: 'line-through' }}>$97</span> $89</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (8).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Blush Belle</p>
            <p className={styles.naz}><span style={{ fontSize: '18px', opacity: '65%', textDecoration: 'line-through' }}>$139</span> $129</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (4).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Skyline Bloom</p>
            <p className={styles.naz}><span style={{ fontSize: '18px', opacity: '65%', textDecoration: 'line-through' }}>$112</span>$99</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/images/Image (7).png" alt="" />
          <div className={styles.stroka}>
            <p className={styles.naz}>Lily Grace</p>
            <p className={styles.naz}><span style={{ fontSize: '18px', opacity: '65%', textDecoration: 'line-through' }}>$82</span>$73</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sale
