import { useReducer } from 'react'

const DEFAULT_VALUE = {
  name: '',
  comment: '',
  rating: 0,
}

const reducer = (state, action) => {
  switch (action?.type) {
    case 'setName':
      return { ...state, name: action.payload }

    case 'setComment':
      return { ...state, comment: action.payload }

    case 'setRating':
      return { ...state, rating: action.payload }

    case 'reset':
      return { ...DEFAULT_VALUE }

    default:
      return state
  }
}

export const Feedback = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE)

  return (
    <div>
      <h3>Оставить отзыв</h3>
      <div>
        <label htmlFor='userName'>Имя:</label>
        <input
          id='userName'
          type='text'
          value={formValue.name}
          onChange={(event) => {
            dispatch({ type: 'setName', payload: event.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor='userComment'>Комментарий:</label>
        <textarea
          id='userComment'
          value={formValue.comment}
          onChange={(event) => {
            dispatch({ type: 'setComment', payload: event.target.value })
          }}
        />
      </div>
      <div>
        <label htmlFor='userRating'>Рейтинг:</label>
        <input
          id='userRating'
          type='number'
          value={formValue.rating}
          onChange={(event) => {
            dispatch({ type: 'setRating', payload: event.target.value })
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'reset' })
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  )
}
