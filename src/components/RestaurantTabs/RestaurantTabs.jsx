import { RestaurantTab } from 'components/RestaurantTab/RestaurantTab'
import styles from './RestaurantTabs.module.scss'
import classNames from 'classnames'

export const RestaurantTabs = ({ restaurants, activeRestaurantIndex, onTabSelect }) => {
  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant, index) => (
        <RestaurantTab
          activeTabClass={classNames({ ['active']: index === activeRestaurantIndex })}
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabSelect(index)}
        />
      ))}
    </div>
  )
}
