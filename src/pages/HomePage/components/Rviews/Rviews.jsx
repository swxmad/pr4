import styles from './Rviews.module.css'

function Rviews() {
    return (
        <>
            <p className={styles.zagolovok}>What Customers Say</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p className={styles.buquet}><span style={{ opacity: '80%' }}>Bouquet:</span> White Reverie</p>
                        <p className={styles.opisanie}>“The bouquet was even more beautiful than the photos. Fast delivery and amazing quality!”</p>
                        <div className={styles.otcwn}>
                            <p className={styles.name}>Alisa M.</p>
                            <div className={styles.stars}>
                                <img src="/images/Star.png" alt="" />
                                <p className={styles.name}>5,0</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Image (9).png" alt="" style={{ width: '100%', height: 'auto', borderRadius: '0px 0px 12px 12px' }} />
                </div>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p className={styles.buquet}><span style={{ opacity: '80%' }}>Bouquet:</span> Skyline Bloom</p>
                        <p className={styles.opisanie}>“Ordered for my mom’s birthday – she cried happy tears. Thank you for making it special!”</p>
                        <div className={styles.otcwn}>
                            <p className={styles.name}>Daniel K.</p>
                            <div className={styles.stars}>
                                <img src="/images/Star.png" alt="" />
                                <p className={styles.name}>5,0</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Image (10).png" alt="" style={{ width: '100%', height: 'auto', borderRadius: '0px 0px 12px 12px' }} />
                </div>
                <div className={styles.card}>
                    <div className={styles.text}>
                        <p className={styles.buquet}><span style={{ opacity: '80%' }}>Bouquet:</span> Floral Flirt</p>
                        <p className={styles.opisanie}>“Loved the design and care in the packaging. You can tell these are handcrafted with love.”</p>
                        <div className={styles.otcwn}>
                            <p className={styles.name}>Lina G.</p>
                            <div className={styles.stars}>
                                <img src="/images/Star.png" alt="" />
                                <p className={styles.name}>4,9</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/Image (11).png" alt="" style={{ width: '100%', height: 'auto', borderRadius: '0px 0px 12px 12px' }} />
                </div>
            </div>
        </>
    )
}

export default Rviews
