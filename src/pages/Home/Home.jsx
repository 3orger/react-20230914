import { useState } from 'react'
import { restaurants } from 'data/restaurants'
import { RestaurantTabs } from 'components/RestaurantTabs/RestaurantTabs'
import { Restaurant } from 'components/Restaurant/Restaurant'

export function Home() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (restaurants.length < 2) {
    return null
  }

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex} />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  )
}
