import styles from './Footer.module.scss'

export const Footer = ({ heading }) => (
  <footer className={styles.footer}>
    <div className='container'>{heading}</div>
  </footer>
)
