import classNames from 'classnames'
import styles from './styles.module.scss'

export const Footer = ({ heading, className }) => (
  <footer className={classNames(styles.root, className)}>
    <div className="container">{heading}</div>
  </footer>
)
