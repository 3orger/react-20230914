import { Amount } from 'components/Amount/Amount'

export function Menu({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.name} <Amount />
        </li>
      ))}
    </ul>
  )
}
