import classNames from 'classnames'
import { RestaurantTab } from 'components/RestaurantTab/component'

import styles from './styles.module.scss'

export const RestaurantTabs = ({ restaurants, activeRestaurantIndex, onTabSelect, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {restaurants.map((restaurant, index) => (
        <RestaurantTab
          className={styles.tab}
          activeTabClass={classNames({ ['active']: index === activeRestaurantIndex })}
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabSelect(index)}
        />
      ))}
    </div>
  )
}
