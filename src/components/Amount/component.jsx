import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { SwitchThemeContext } from 'contexts/SwitchThemeContext'

export const Amount = ({ className }) => {
  const [amount, setAmount] = useState(0)
  const { theme, setTheme } = useContext(SwitchThemeContext)

  return (
    <div className={classNames(styles.root, className)}>
      <button
        className={classNames(styles.btn, theme)}
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      >
        -
      </button>
      <span className={styles.count}>{amount}</span>
      <button className={styles.btn} onClick={() => setAmount(amount + 1)} disabled={amount > 4}>
        +
      </button>
    </div>
  )
}
