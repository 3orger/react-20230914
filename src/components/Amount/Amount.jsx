import { useState } from 'react'
import styles from './Amount.module.scss'

export const Amount = () => {
  const [amount, setAmount] = useState(0)

  return (
    <div className={styles.amount}>
      <button className={styles.btn} onClick={() => setAmount(amount - 1)} disabled={amount === 0}>
        -
      </button>
      <span className={styles.count}>{amount}</span>
      <button className={styles.btn} onClick={() => setAmount(amount + 1)} disabled={amount > 4}>
        +
      </button>
    </div>
  )
}
