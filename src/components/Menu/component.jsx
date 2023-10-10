import classNames from 'classnames'
import { Dish } from 'components/Dish/component'

import styles from './styles.module.scss'

export const Menu = ({ dishes, className }) => {
  return (
    <ul className={classNames(styles.root, className)}>
      {dishes.map((dish) => (
        <li className={styles.dish} key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  )
}
