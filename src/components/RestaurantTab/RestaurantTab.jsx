import classNames from 'classnames'
import styles from './RestaurantTab.module.scss'

export const RestaurantTab = ({ title, onClick, activeTabClass }) => {
  return (
    <button className={classNames(styles.tab, styles[activeTabClass])} onClick={onClick}>
      {title}
    </button>
  )
}
