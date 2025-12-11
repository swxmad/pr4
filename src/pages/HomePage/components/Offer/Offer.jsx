import styles from './Offer.module.css'

function Offer() {
    return (
        <>
            <div className={styles.offer}>
                <div className={styles.hour}>Special Offer</div>
                <p>Enjoy 20% Off Your First Bouquet!</p>
                <button>Order Bouquet</button>
            </div>
        </>
    )
}

export default Offer
