import { useState } from 'react'
import { restaurants } from 'data/restaurants'

import { RestaurantTabs } from 'components/RestaurantTabs/component'
import { Restaurant } from 'components/Restaurant/component'
import { Layout } from 'components/Layout/component'
import { ThemeSwitchProvider } from 'contexts/SwitchThemeContext'

import styles from 'pages/Home/styles.module.scss'

export function Home() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (restaurants.length < 2) {
    return null
  }

  return (
    <>
      <ThemeSwitchProvider>
        <Layout>
          <RestaurantTabs
            className={styles.tabs}
            restaurants={restaurants}
            activeRestaurantIndex={activeRestaurantIndex}
            onTabSelect={setActiveRestaurantIndex}
          />
          <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </Layout>
      </ThemeSwitchProvider>
    </>
  )
}
