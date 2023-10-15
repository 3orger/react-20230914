import styles from './styles.module.scss'

export const Footer = ({ heading }) => (
  <footer className={styles.root}>
    <div className='container'>{heading}</div>
  </footer>
)
