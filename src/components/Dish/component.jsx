import { Amount } from 'components/Amount/component'

import styles from './styles.module.scss'

export const Dish = ({ dish }) => {
  return (
    <div>
      {dish.name}
      <Amount className={styles.amount} />
    </div>
  )
}
