import styles from './Header.module.scss'

export const Header = ({ heading }) => (
  <header className={styles.header}>
    <div className="container">{heading}</div>
  </header>
)
