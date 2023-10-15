import { useContext, useState } from 'react'
import classNames from 'classnames'
import { SwitchThemeContext } from 'contexts/SwitchThemeContext'

import styles from './styles.module.scss'

export const Amount = ({ className }) => {
  const [amount, setAmount] = useState(0)
  const { theme } = useContext(SwitchThemeContext)

  return (
    <div className={classNames(styles.root, className)}>
      <button
        className={classNames(styles.button, theme === 'dark' ? styles.dark : styles.light)}
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      >
        -
      </button>
      <span className={styles.count}>{amount}</span>
      <button
        className={classNames(styles.button, theme === 'dark' ? styles.dark : styles.light)}
        onClick={() => setAmount(amount + 1)}
        disabled={amount > 4}
      >
        +
      </button>
    </div>
  )
}
