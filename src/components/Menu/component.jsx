import { Dish } from 'components/Dish/component'
import styles from './styles.module.scss'

export const Menu = ({ dishes }) => {
  return (
    <ul className={styles.root}>
      {dishes.map((dish) => (
        <li className={styles.dish} key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  )
}
