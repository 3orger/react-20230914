import { Menu } from 'components/Menu/Menu'
import { Reviews } from 'components/Reviews/Reviews'

export function CardRestaurant({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <Menu list={data.menu} />
      <Reviews list={data.reviews} />
    </div>
  )
}
