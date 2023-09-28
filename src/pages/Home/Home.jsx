import { useState } from 'react'
import { restaurants } from 'data/restaurants'
import { Tabs } from 'components/Tabs/Tabs'
import { CardRestaurant } from 'components/CardRestaurant/CardRestaurant'

export function Home() {
  const [activeTab, setActiveTab] = useState(restaurants[0].name)

  return (
    <>
      <Tabs list={restaurants} openTab={(el) => setActiveTab(el.target.innerText)}>
        {restaurants.map((item) => {
          if (activeTab === item.name) {
            return <CardRestaurant key={item.id} data={item} />
          }
        })}
      </Tabs>
    </>
  )
}
