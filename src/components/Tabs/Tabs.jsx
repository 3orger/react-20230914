export function Tabs({ list, children, openTab }) {
  if (list.length < 2) {
    return null
  }

  return (
    <>
      <div>
        {list.map((item) => (
          <button key={item.id} onClick={openTab}>
            {item.name}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </>
  )
}
