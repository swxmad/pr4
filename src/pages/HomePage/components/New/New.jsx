import styles from './New.module.css'
import Card from './ProductCard/Card';
import { useState, useEffect } from 'react'
import axios from 'axios';

function New() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const respose = await axios.get(
          "https://torguisam.ru/api/product/oksei-all-products"
        );

        setProducts(respose.data.slice(0, 10))

        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div>Загрузка товаров...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <>
      <p className={styles.zagolovok}>New Arrivals</p>
      <div className={styles.products_grid}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.images[0]} alt={product.name} style={{width:'305px', height:'381px'}}/>
            <h3>{product.name}</h3>
            <p>{product.description && product.description.length > 150
              ? product.description.substring(0, 150) + "..."
              : product.description || "Описание отсутствует"}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default New
