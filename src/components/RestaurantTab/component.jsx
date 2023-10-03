import classNames from 'classnames'
import styles from './styles.module.scss'

export const RestaurantTab = ({ title, onClick, activeTabClass, className }) => {
  return (
    <button
      className={classNames(styles.root, styles[activeTabClass], className)}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
