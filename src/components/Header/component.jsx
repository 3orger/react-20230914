import { useContext } from 'react'
import classNames from 'classnames'
import { SwitchThemeContext } from 'contexts/SwitchThemeContext'

import styles from './styles.module.scss'

export const Header = ({ heading, className }) => {
  const { theme, setTheme } = useContext(SwitchThemeContext)
  return (
    <header className={classNames(styles.root, className)}>
      <div className='container'>
        <h2>{heading}</h2>
        <button className={styles.switchTheme} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Сменить тему
        </button>
      </div>
    </header>
  )
}
