import classNames from 'classnames'
import styles from './styles.module.scss'

export const Header = ({ heading, className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <div className="container">
        <h2>{heading}</h2>
        <button className={styles.switchTheme}>Сменить тему</button>
      </div>
    </header>
  )
}
