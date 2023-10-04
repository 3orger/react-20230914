import { useState } from 'react'
import { restaurants } from 'data/restaurants'

import { RestaurantTabs } from 'components/RestaurantTabs/component'
import { Restaurant } from 'components/Restaurant/component'
import { Header } from 'components/Header/component'
import { Footer } from 'components/Footer/component'
import { ThemeSwitchProvider } from 'contexts/SwitchThemeContext'

import styles from 'pages/Home/styles.module.scss'

export function Home() {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  if (restaurants.length < 2) {
    return null
  }

  return (
    <>
      <ThemeSwitchProvider value="dark-theme">
        <Header className={styles.header} heading="React 2023-09-14" />
        <main>
          <div className="container">
            <RestaurantTabs
              className={styles.tabs}
              restaurants={restaurants}
              activeRestaurantIndex={activeRestaurantIndex}
              onTabSelect={setActiveRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
          </div>
        </main>
        <Footer className={styles.footer} heading="React 2023-09-14" />
      </ThemeSwitchProvider>
    </>
  )
}
