import { RestaurantTab } from 'components/RestaurantTab/RestaurantTab'

export const RestaurantTabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <RestaurantTab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabSelect(index)}
        />
      ))}
    </div>
  )
}
