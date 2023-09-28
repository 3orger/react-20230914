export function Reviews({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}
