import { Header } from 'components/Header/component'
import { Footer } from 'components/Footer/component'

import styles from './styles.module.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Header className={styles.header} heading='React 2023-09-14' />
      <main>
        <div className='container'>{children}</div>
      </main>
      <Footer className={styles.footer} heading='React 2023-09-14' />
    </>
  )
}
