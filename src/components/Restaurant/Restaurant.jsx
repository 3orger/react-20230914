import { Menu } from 'components/Menu/Menu'
import { Reviews } from 'components/Reviews/Reviews'

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}
