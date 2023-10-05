import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SwitchThemeContext } from 'contexts/SwitchThemeContext'

export const Amount = ({ className }) => {
  const [amount, setAmount] = useState(0)
  const { theme } = useContext(SwitchThemeContext)

  return (
    <div className={classNames(styles.root, className)}>
      <button
        className={classNames(styles.btn, theme === 'dark' ? styles.dark : styles.light)}
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      >
        -
      </button>
      <span className={styles.count}>{amount}</span>
      <button
        className={classNames(styles.btn, theme === 'dark' ? styles.dark : styles.light)}
        onClick={() => setAmount(amount + 1)}
        disabled={amount > 4}
      >
        +
      </button>
    </div>
  )
}
