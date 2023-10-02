import { Amount } from 'components/Amount/Amount'

export const Dish = ({ dish }) => {
  return (
    <div>
      {dish.name}
      <Amount />
    </div>
  )
}
