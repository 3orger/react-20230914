import { Dish } from 'components/Dish/Dish'
import styles from './Menu.module.scss'

export const Menu = ({ dishes }) => {
  return (
    <ul className={styles.menu}>
      {dishes.map((dish) => (
        <li className={styles.menuItem} key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  )
}
