import { useReducer } from 'react'
import styles from './styles.module.scss'

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
    <div className={styles.root}>
      <h3 className={styles.title}>Оставить отзыв</h3>
      <div className={styles.field}>
        <label className={styles.label} htmlFor='userName'>
          Имя:
        </label>
        <input
          id='userName'
          className={styles.input}
          type='text'
          value={formValue.name}
          onChange={(event) => {
            dispatch({ type: 'setName', payload: event.target.value })
          }}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor='userComment'>
          Комментарий:
        </label>
        <textarea
          id='userComment'
          className={styles.textarea}
          value={formValue.comment}
          onChange={(event) => {
            dispatch({ type: 'setComment', payload: event.target.value })
          }}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor='userRating'>
          Рейтинг:
        </label>
        <input
          id='userRating'
          className={styles.input}
          type='number'
          value={formValue.rating}
          onChange={(event) => {
            dispatch({ type: 'setRating', payload: event.target.value })
          }}
        />
      </div>
      <div className={styles.field}>
        <button
          className={styles.submit}
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
