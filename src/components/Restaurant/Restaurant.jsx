import { Menu } from 'components/Menu/Menu'
import { Reviews } from 'components/Reviews/Reviews'
import styles from './Restaurant.module.scss'

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}
