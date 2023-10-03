import classNames from 'classnames'
import styles from './styles.module.scss'

export const Header = ({ heading, className }) => (
  <header className={classNames(styles.root, className)}>
    <div className="container">{heading}</div>
  </header>
)
