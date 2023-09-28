import { useState } from 'react'

export function Amount() {
  const [amount, setAmount] = useState(0)

  return (
    <>
      <button onClick={() => setAmount(amount - 1)} disabled={amount === 0}>
        -
      </button>
      <span>{amount}</span>
      <button onClick={() => setAmount(amount + 1)} disabled={amount > 4}>
        +
      </button>
    </>
  )
}
