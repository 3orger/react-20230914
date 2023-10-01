import { useState } from 'react'
import { restaurants } from 'data/restaurants'

import { RestaurantTabs } from 'components/RestaurantTabs/RestaurantTabs'
import { Restaurant } from 'components/Restaurant/Restaurant'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'

export function Home() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (restaurants.length < 2) {
    return null
  }

  return (
    <>
      <Header heading='React 2023-09-14' />
      <main>
        <div className='container'>
          <RestaurantTabs
            restaurants={restaurants}
            activeRestaurantIndex={activeRestaurantIndex}
            onTabSelect={setActiveRestaurantIndex}
          />
          <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
      </main>
      <Footer heading='React 2023-09-14' />
    </>
  )
}
