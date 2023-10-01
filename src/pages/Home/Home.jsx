import { useState } from 'react'
import { restaurants } from 'data/restaurants'

import { RestaurantTabs } from 'components/RestaurantTabs/RestaurantTabs'
import { Restaurant } from 'components/Restaurant/Restaurant'
import { Header } from 'components/Header/Header'

import 'styles/normalize.scss'
import 'styles/global.scss'

export function Home() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (restaurants.length < 2) {
    return null
  }

  return (
    <>
      <Header heading="React 2023-09-14" />
      <main>
        <RestaurantTabs restaurants={restaurants} onTabSelect={setActiveRestaurantIndex} />
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      </main>
    </>
  )
}
