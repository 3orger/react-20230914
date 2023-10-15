import { Menu } from 'components/Menu/component'
import { Reviews } from 'components/Reviews/component'

import styles from './styles.module.scss'

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} className={styles.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}
